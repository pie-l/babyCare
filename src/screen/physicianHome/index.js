import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import {Icon, TextInputComp} from '../../component';
import {icons} from '../../helper/iconsConstants';
import {useDispatch} from 'react-redux';
import {setRole} from '../../actions/mainAction';
import {colors} from '../../helper/colors';
import {filter} from 'lodash';

const PhysicianHome = () => {
  const [babyList, setBabyList] = useState([]);
  const [staticBabyList, setStaticBabyList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const dispatch = useDispatch();

  const {navigate} = useNavigation();

  useEffect(() => {
    const subscriber = firestore()
      .collection('babies')
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot) {
          setBabyList(documentSnapshot?.docs);
          setStaticBabyList(documentSnapshot?.docs);
        }
      });

    return () => subscriber();
  }, []);

  const onSearchChange = text => {
    setSearchText(text);

    const searchKeyword = text.toLowerCase();

    setBabyList(
      filter(staticBabyList, item => {
        const searchIn = item?._data?.hospitalNo?.toLowerCase();
        return searchIn.includes(searchKeyword);
      }),
    );
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    setSearchText('');
    setTimeout(() => {
      setBabyList(staticBabyList);
      setIsRefreshing(false);
    }, 1000);
  };

  const onSettingPress = () => {
    navigate('Setting');
  };

  const babyListItemSeparatorComponent = () => {
    return <View style={style.babyListItemSeparatorComponentStyle} />;
  };

  const babyListFooterComponent = () => {
    return <View style={style.babyListFooterComponentStyle} />;
  };

  const babyListEmptyComponent = () => {
    return (
      <View style={style.babyListFooterComponentStyle}>
        <Text>{`Sorry no data found with ${searchText}`}</Text>
      </View>
    );
  };

  const renderSettingItem = ({item}) => {
    const {gender, name, dateOfBirth, hospitalNo, weight} = item._data;
    const isFemale = gender === 'Female';

    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => {
          navigate('BabyDetailsScreen', {
            babyDetails: item._data,
            docId: item.id,
          });
        }}
        style={[
          style.babyListItemContainerStyle,
          {borderColor: isFemale ? '#ffe4e8' : '#dff1ff'},
        ]}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={style.babyListItemGradientContainerStyle}
          colors={isFemale ? ['#ffe4e8', '#fff0f0'] : ['#dff1ff', '#f0f3ff']}>
          {[
            ['Name', name],
            ['Gender', gender],
            ['Date Of Birth(DD/MM/YYYY)', dateOfBirth],
            ['Hospital No', hospitalNo],
            ['Weight(g)', weight],
          ].map(([label, value]) => (
            <View style={style.babyListItemLabelContainerStyle} key={label}>
              <Text
                style={
                  style.babyListItemContainerLabelTextStyle
                }>{`${label} : `}</Text>
              <Text
                style={
                  style.babyListItemContainerValueTextStyle
                }>{`${value}`}</Text>
            </View>
          ))}
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.containerStyle}>
      <View style={style.titleContainerStyle}>
        <Text style={style.titleStyle}>Hello, Physician</Text>

        <Icon
          isPressable
          icon={icons.settings}
          iconContainerStyle={style.logoutIconContainerStyle}
          iconStyle={style.logoutIconStyle}
          onIconPress={onSettingPress}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigate('AddBabyDetails')}
        style={style.addBabyDetailsButton}>
        <Text style={style.addBabyDetailsButtonText}>Add Baby Details</Text>
      </TouchableOpacity>

      <Text style={style.babyListTextStyle}>Baby List</Text>

      <TextInputComp
        isIconAvailable={false}
        value={searchText}
        onChangeText={onSearchChange}
        placeholder={'Search with Hospital No'}
        mainContainerStyle={style.searchInputContainerStyle}
        placeholderTextColor={colors.placeholderColor}
      />

      <FlatList
        data={babyList}
        renderItem={renderSettingItem}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={babyListItemSeparatorComponent}
        contentContainerStyle={style.babyListContainerStyle}
        ListFooterComponent={babyListFooterComponent}
        ListEmptyComponent={babyListEmptyComponent}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />
    </View>
  );
};

export default PhysicianHome;
