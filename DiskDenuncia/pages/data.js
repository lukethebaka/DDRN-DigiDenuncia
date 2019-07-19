import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CrimeCarousel from './index'
import { LineChart, PieChart, ContributionGraph, StackedBarChart
} from 'react-native-chart-kit'

export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.styles = StyleSheet.create({
      header: {
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        fontSize: 23,
        fontWeight: 'bold',
      },
      title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: '#363636',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
      },
    });

    this.dataBars = {
      labels: ['Test1', 'Test2'],
      legend: ['L1', 'L2', 'L3'],
      data: [
        [60, 60, 60],
        [30,30,60],
      ],
      barColors: ['#ff0000', '#00ff00', '#0000ff'],
    }

    this.dataPie = [
      { name: 'Bairro 1', population: 5, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Bairro 2', population: 20, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Bairro 3', population: 40, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Bairro 4', population: 10, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Bairro 5', population: 40, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Bairro 6', population: 3, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Bairro 7', population: 70, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Bairro 8', population: 22, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Bairro 9', population: 50, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Bairro 0', population: 11, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    ]

    return (
      <View style={{flex: 1, backgroundColor: '#d6d6d6'}}>
        <View style={this.styles.header}>
          <Text style={this.styles.headerText}>Dados e Históricos</Text>
        </View>
        <ScrollView>
          <CrimeCarousel/>
          <Text style={this.styles.title}>Índice de Violência</Text>
          <StackedBarChart
            style={{
              marginTop: 30,
              marginBottom: 30,
            }}
            data={this.dataBars}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: '#d6d6d6',
              backgroundGradientFrom: '#d6d6d6',
              backgroundGradientTo: '#d6d6d6',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `#333`,
              style: {
                borderRadius: 10,
                color: '#fff',
              }
            }}
          />
          <Text style={this.styles.title}>Denuncias por bairro (%)</Text>
          <PieChart
            style={{
              marginTop: 30,
              marginBottom: 30,
            }}
            data={this.dataPie}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10
              }
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </ScrollView>
      </View>
    );
  }
}