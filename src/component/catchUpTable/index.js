import React from 'react';
import {ScrollView, View} from 'react-native';
import {style} from './styles';
import {Rows, Table} from 'react-native-table-component';

const tableData = [
  ['Now', 'BCG, OPV, Hep B', ''],
  ['1m', 'OPV, DPT, HepB', ''],
  ['2m', 'OPV, MMR, Typhoid', ''],
  ['6w', 'DPT, HepB', ''],
];

const CatchUpTable = () => {
  return (
    <View style={style.containerStyle}>
      <ScrollView>
        <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
          <Rows
            flexArr={[0.6, 2, 1]}
            data={tableData}
            textStyle={{margin: 6}}
          />
        </Table>
      </ScrollView>
    </View>
  );
};

export default CatchUpTable;
