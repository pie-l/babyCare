import React from 'react';
import {ScrollView, View} from 'react-native';
import {style} from './styles';
import {Rows, Table} from 'react-native-table-component';

const tableData = [
  ['0', 'BCG, OPV, Hep B', ''],
  ['6w', 'OPV-1, Penta-1, RVV-1, f-IPV-1, PCV-1*', ''],
  ['10w', 'OPV-2, Penta-2, RVV-2', ''],
  ['14w', 'OPV-3, Penta-3, RVV-3', ''],
  ['9m', 'MR-1, fiPV, PCV booster, JE-1**', ''],
  ['18m', 'MR-2, DPT-b1, OPV-b, JE-2**', ''],
  ['5y', 'DPT booster2', ''],
  ['10y', 'Tetanus and Adult Diphtheria(Td) ***', ''],
  ['16y', 'Td', ''],
];

const NISTable = () => {
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

export default NISTable;
