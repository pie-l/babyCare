import React from 'react';
import {ScrollView, View} from 'react-native';
import {style} from './styles';
import {Rows, Table} from 'react-native-table-component';

const tableData = [
  ['0', 'BCG, OPV, Hep B', ''],
  ['6w', 'Penta-1, RVV-1, IPV-1, PCV-1', ''],
  ['10w', 'Penta-2, RVV-2, IPV-2, PCV-2', ''],
  ['14w', 'Penta-3, RVV-3, IPV-3, PCV-3', ''],
  ['6m', 'Influenza-1', ''],
  ['7m', 'Influenza-2', ''],
  ['6-9m', 'Typhoid conjugate vaccine', ''],
  ['9m', 'MMR-1', ''],
  ['12m', 'Hepatitis A', ''],
  ['15m', 'MMR-2, Varicella-1, PCV-b', ''],
  ['16-18m', 'DTP-b1, HiB-b1, IPV-b1', ''],
  ['18-19m', 'HepA-2, Varicela-2', ''],
  ['4-6y', 'DTP-b2, IPV-b2, MMR-3', ''],
  ['10-12y', 'Tdap, HPV', ''],
];

const IAPTable = () => {
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

export default IAPTable;
