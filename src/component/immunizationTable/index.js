import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Cell,
} from 'react-native-table-component';
import {style} from './styles';
import {
  getDateAfterMonths,
  getDateAfterWeeks,
  getDateAfterYears,
} from '../../helper/utils';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';

const TABLE_HEAD = [
  'Age to be given',
  'Prophylactic Injection',
  'Date Due',
  'Date Given',
];

const ImmunizationTable = ({preventiveInjectionsDates}) => {
  const [date, setDate] = useState('12/04/23');

  const {babyDetails} = useSelector(state => state.main);

  useEffect(() => {
    if (!isEmpty(babyDetails)) {
      setDate(babyDetails.dateOfBirth);
    }
  }, []);

  const tableData = [
    {
      title: 'At birth',
      cols: [
        ['BCG', date, preventiveInjectionsDates?.i1],
        ['OPV 0', date, preventiveInjectionsDates?.i2],
        ['Hep- B1(v)', date, preventiveInjectionsDates?.i3],
      ],
    },
    {
      title: 'In 6 weeks',
      cols: [
        [
          'DTwP 1/DTap',
          getDateAfterWeeks(date, 6),
          preventiveInjectionsDates?.i4,
        ],
        ['Hep- B2', getDateAfterWeeks(date, 6), preventiveInjectionsDates?.i5],
        ['Hib 1', getDateAfterWeeks(date, 6), preventiveInjectionsDates?.i6],
        [
          'IPV 1/OPV',
          getDateAfterWeeks(date, 6),
          preventiveInjectionsDates?.i7,
        ],
        [
          'Rotavirus 1',
          getDateAfterWeeks(date, 6),
          preventiveInjectionsDates?.i8,
        ],
        ['(a)PCV 1', getDateAfterWeeks(date, 6), preventiveInjectionsDates?.i9],
      ],
    },
    {
      title: 'In 10 weeks',
      cols: [
        [
          'DTwP 2/DTap',
          getDateAfterWeeks(date, 10),
          preventiveInjectionsDates?.i10,
        ],
        ['Hib 2', getDateAfterWeeks(date, 10), preventiveInjectionsDates?.i11],
        [
          'IPV 2/OPV',
          getDateAfterWeeks(date, 10),
          preventiveInjectionsDates?.i12,
        ],
        [
          'Rotavirus 2',
          getDateAfterWeeks(date, 10),
          preventiveInjectionsDates?.i13,
        ],
        [
          '(a)PCV 2',
          getDateAfterWeeks(date, 10),
          preventiveInjectionsDates?.i14,
        ],
      ],
    },
    {
      title: 'In 14 weeks',
      cols: [
        [
          'DTwP 3/DTap',
          getDateAfterWeeks(date, 14),
          preventiveInjectionsDates?.i15,
        ],
        ['Hib 3', getDateAfterWeeks(date, 14), preventiveInjectionsDates?.i16],
        [
          'IPV 3/OPV',
          getDateAfterWeeks(date, 14),
          preventiveInjectionsDates?.i17,
        ],
        [
          'Rotavirus 3',
          getDateAfterWeeks(date, 14),
          preventiveInjectionsDates?.i18,
        ],
        [
          '(a)PCV 3',
          getDateAfterWeeks(date, 14),
          preventiveInjectionsDates?.i19,
        ],
      ],
    },
    {
      title: 'In >6 months',
      cols: [
        ['OPV 1#', getDateAfterMonths(date, 6), preventiveInjectionsDates?.i20],
        [
          'Hep- B3',
          getDateAfterMonths(date, 6),
          preventiveInjectionsDates?.i21,
        ],
      ],
    },
    {
      title: 'In >6 months',
      cols: [
        ['FLU**', getDateAfterMonths(date, 6), preventiveInjectionsDates?.i22],
      ],
    },
    {
      title: 'In >6 months',
      cols: [
        ['TCV', getDateAfterMonths(date, 6), preventiveInjectionsDates?.i23],
      ],
    },
    {
      title: 'In 9 months',
      cols: [
        ['MMR 1', getDateAfterMonths(date, 9), preventiveInjectionsDates?.i24],
        ['OPV 2#', getDateAfterMonths(date, 9), preventiveInjectionsDates?.i25],
      ],
    },
    {
      title: 'In 12 months',
      cols: [
        [
          'Hep -A1',
          getDateAfterMonths(date, 12),
          preventiveInjectionsDates?.i26,
        ],
      ],
    },
    {
      title: 'In 15 months',
      cols: [
        ['MMR 2', getDateAfterMonths(date, 15), preventiveInjectionsDates?.i27],
        [
          'Varicella 1',
          getDateAfterMonths(date, 15),
          preventiveInjectionsDates?.i28,
        ],
        [
          '(a) PCV Booster',
          getDateAfterMonths(date, 15),
          preventiveInjectionsDates?.i29,
        ],
      ],
    },
    {
      title: 'In 16-18 months',
      cols: [
        [
          'DTwP B1/DTap B1',
          getDateAfterMonths(date, 17),
          preventiveInjectionsDates?.i30,
        ],
        [
          'Hib B11',
          getDateAfterMonths(date, 17),
          preventiveInjectionsDates?.i31,
        ],
        [
          'IPV B1',
          getDateAfterMonths(date, 17),
          preventiveInjectionsDates?.i32,
        ],
      ],
    },
    {
      title: 'In 18 months',
      cols: [
        [
          'Hep- A2',
          getDateAfterMonths(date, 18),
          preventiveInjectionsDates?.i33,
        ],
      ],
    },
    {
      title: 'In 2 years',
      cols: [
        ['TPSV^', getDateAfterYears(date, 2), preventiveInjectionsDates?.i34],
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={style.containerStyle}>
      <Table borderStyle={style.tableStyle}>
        <Row
          data={TABLE_HEAD}
          flexArr={[1.35, 1.3, 1.1, 1.1]}
          style={style.head}
          textStyle={style.tableHeadTextStyle}
        />
        {tableData.map((item, index) => {
          return (
            <TableWrapper style={style.wrapper} key={index}>
              <Cell
                data={item.title}
                textStyle={style.tableTitleTextStyle}
                style={style.cellStyle}
              />

              <Rows
                data={item.cols}
                flexArr={[1.3, 1.1, 1.1]}
                style={style.rowStyle}
                textStyle={style.rowTextStyle}
              />
            </TableWrapper>
          );
        })}
      </Table>

      <View>
        <Text style={{color: '#2c2c2c'}}>Note:</Text>
        <Text style={{color: '#2c2c2c'}}>
          Empty dates will be filled by Physician
        </Text>
      </View>
    </ScrollView>
  );
};

export default ImmunizationTable;
