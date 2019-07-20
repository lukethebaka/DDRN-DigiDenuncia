import React from 'react';
import { StyleSheet, Picker, Text, View, Dimensions, ScrollView } from 'react-native';
import CrimeCarousel from './index';
import { PieChart, LineChart } from 'react-native-chart-kit';

export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    this.state = {
        cidade: '',
    };

    this.styles = StyleSheet.create({
      header: {
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        color: '#363636',
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

    this.dataLines = {
      labels: ['2013', '2014', '2015', '2016', '2017'],
      datasets: [{
        data: [1447 ,1602, 1545, 1854, 2233],
        strokeWidth: 2 // optional
      }]
    }

    this.dataPie = [
      { name: 'Roubo', population: 5, color: '#FFFFCC', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Corrupção', population: 20, color: '#FF9933', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Armas', population: 40, color: '#CC99CC', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Violência', population: 10, color: '#3399FF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Homicídio', population: 40, color: '#33FF99', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Tráfico', population: 3, color: '#FFFF33', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Ambientais', population: 70, color: '#006633', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Foragidos', population: 22, color: '#330033', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Outros', population: 50, color: '#CC0000', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ]

    return (
      <View style={{flex: 1, backgroundColor: '#eee'}}>
        <View style={this.styles.header}>
          <Text style={this.styles.headerText}>Dados Estatísticos</Text>
        </View>
        <ScrollView>
          <CrimeCarousel />
          <Text style={this.styles.title}>Índice de Homicídios Oficial no RN</Text>
          <LineChart
            style={{
              borderRadius: 10,
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 10,
              elevation: 1,
            }}
            data={this.dataLines}
            width={0.95 * Dimensions.get('window').width} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `#333`,
              style: {
                borderRadius: 10,
                color: '#fff',
              }
            }}
          />
          <Text style={this.styles.title}>Denuncias por cidade (%)</Text>
          <Picker
            style={{ height: 40, marginBottom: 20, marginLeft: 15, textAlign: 'left'}}
            selectedValue={this.state.cidade}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({cidade: itemValue})
            }>
              <Picker.Item value='' label='Acari'/>
              <Picker.Item value='' label='Acu'/>
              <Picker.Item value='' label='Afonso Bezerra'/>
              <Picker.Item value='' label='Agua Nova'/>
              <Picker.Item value='' label='Alexandria'/>
              <Picker.Item value='' label='Almino Afonso'/>
              <Picker.Item value='' label='Alto do Rodrigues'/>
              <Picker.Item value='' label='Angicos'/>
              <Picker.Item value='' label='Antonio Martins'/>
              <Picker.Item value='' label='Apodi'/>
              <Picker.Item value='' label='Areia Branca'/>
              <Picker.Item value='' label='Ares'/>
              <Picker.Item value='' label='Augusto Severo'/>
              <Picker.Item value='' label='Baia Formosa'/>
              <Picker.Item value='' label='Barauna'/>
              <Picker.Item value='' label='Barcelona'/>
              <Picker.Item value='' label='Bento Fernandes'/>
              <Picker.Item value='' label='Bodo'/>
              <Picker.Item value='' label='Bom Jesus'/>
              <Picker.Item value='' label='Brejinho'/>
              <Picker.Item value='' label='Caicara do Norte'/>
              <Picker.Item value='' label='Caicara do Rio do Vento'/>
              <Picker.Item value='' label='Caico'/>
              <Picker.Item value='' label='Campo Redondo'/>
              <Picker.Item value='' label='Canguaretama'/>
              <Picker.Item value='' label='Caraubas'/>
              <Picker.Item value='' label='Carnauba dos Dantas'/>
              <Picker.Item value='' label='Carnaubais'/>
              <Picker.Item value='' label='Ceara-Mirim'/>
              <Picker.Item value='' label='Cerro Cora'/>
              <Picker.Item value='' label='Coronel Ezequiel'/>
              <Picker.Item value='' label='Coronel Joao Pessoa'/>
              <Picker.Item value='' label='Cruzeta'/>
              <Picker.Item value='' label='Currais Novos'/>
              <Picker.Item value='' label='Doutor Severiano'/>
              <Picker.Item value='' label='Encanto'/>
              <Picker.Item value='' label='Equador'/>
              <Picker.Item value='' label='Espirito Santo'/>
              <Picker.Item value='' label='Extremoz'/>
              <Picker.Item value='' label='Felipe Guerra'/>
              <Picker.Item value='' label='Fernando Pedroza'/>
              <Picker.Item value='' label='Florania'/>
              <Picker.Item value='' label='Francisco Dantas'/>
              <Picker.Item value='' label='Frutuoso Gomes'/>
              <Picker.Item value='' label='Galinhos'/>
              <Picker.Item value='' label='Goianinha'/>
              <Picker.Item value='' label='Governador Dix-Sept Rosado'/>
              <Picker.Item value='' label='Grossos'/>
              <Picker.Item value='' label='Guamare'/>
              <Picker.Item value='' label='Ielmo Marinho'/>
              <Picker.Item value='' label='Ipanguacu'/>
              <Picker.Item value='' label='Ipueira'/>
              <Picker.Item value='' label='Itaja'/>
              <Picker.Item value='' label='Itau'/>
              <Picker.Item value='' label='Jacana'/>
              <Picker.Item value='' label='Jandaira'/>
              <Picker.Item value='' label='Janduis'/>
              <Picker.Item value='' label='Januario Cicco'/>
              <Picker.Item value='' label='Japi'/>
              <Picker.Item value='' label='Jardim de Angicos'/>
              <Picker.Item value='' label='Jardim de Piranhas'/>
              <Picker.Item value='' label='Jardim do Serido'/>
              <Picker.Item value='' label='Joao Camara'/>
              <Picker.Item value='' label='Joao Dias'/>
              <Picker.Item value='' label='Jose da Penha'/>
              <Picker.Item value='' label='Jucurutu'/>
              <Picker.Item value='' label='Lagoa Nova'/>
              <Picker.Item value='' label='Lagoa Salgada'/>
              <Picker.Item value='' label="Lagoa d'Anta"/>
              <Picker.Item value='' label='Lagoa de Pedras'/>
              <Picker.Item value='' label='Lagoa de Velhos'/>
              <Picker.Item value='' label='Lajes Pintadas'/>
              <Picker.Item value='' label='Lajes'/>
              <Picker.Item value='' label='Lucrecia'/>
              <Picker.Item value='' label='Luis Gomes'/>
              <Picker.Item value='' label='Macaiba'/>
              <Picker.Item value='' label='Macau'/>
              <Picker.Item value='' label='Major Sales'/>
              <Picker.Item value='' label='Marcelino Vieira'/>
              <Picker.Item value='' label='Martins'/>
              <Picker.Item value='' label='Maxaranguape'/>
              <Picker.Item value='' label='Messias Targino'/>
              <Picker.Item value='' label='Montanhas'/>
              <Picker.Item value='' label='Monte Alegre'/>
              <Picker.Item value='' label='Monte das Gameleiras'/>
              <Picker.Item value='' label='Mossoro'/>
              <Picker.Item value='' label='Natal'/>
              <Picker.Item value='' label='Nisia Floresta'/>
              <Picker.Item value='' label='Nova Cruz'/>
              <Picker.Item value='' label="Olho-d'Agua do Borges"/>
              <Picker.Item value='' label='Ouro Branco'/>
              <Picker.Item value='' label='Parana'/>
              <Picker.Item value='' label='Parau'/>
              <Picker.Item value='' label='Parazinho'/>
              <Picker.Item value='' label='Parelhas'/>
              <Picker.Item value='' label='Parnamirim'/>
              <Picker.Item value='' label='Passa e Fica'/>
              <Picker.Item value='' label='Passagem'/>
              <Picker.Item value='' label='Patu'/>
              <Picker.Item value='' label='Pau dos Ferros'/>
              <Picker.Item value='' label='Pedra Grande'/>
              <Picker.Item value='' label='Pedra Preta'/>
              <Picker.Item value='' label='Pedro Avelino'/>
              <Picker.Item value='' label='Pedro Velho'/>
              <Picker.Item value='' label='Pendencias'/>
              <Picker.Item value='' label='Piloes'/>
              <Picker.Item value='' label='Poco Branco'/>
              <Picker.Item value='' label='Portalegre'/>
              <Picker.Item value='' label='Porto do Mangue'/>
              <Picker.Item value='' label='Presidente Juscelino'/>
              <Picker.Item value='' label='Pureza'/>
              <Picker.Item value='' label='Rafael Fernandes'/>
              <Picker.Item value='' label='Rafael Godeiro'/>
              <Picker.Item value='' label='Riacho da Cruz'/>
              <Picker.Item value='' label='Riacho de Santana'/>
              <Picker.Item value='' label='Riachuelo'/>
              <Picker.Item value='' label='Rio do Fogo'/>
              <Picker.Item value='' label='Rodolfo Fernandes'/>
              <Picker.Item value='' label='Ruy Barbosa'/>
              <Picker.Item value='' label='Santa Cruz'/>
              <Picker.Item value='' label='Santa Maria'/>
              <Picker.Item value='' label='Santana do Matos'/>
              <Picker.Item value='' label='Santana do Serido'/>
              <Picker.Item value='' label='Santo Antonio'/>
              <Picker.Item value='' label='Sao Bento do Norte'/>
              <Picker.Item value='' label='Sao Bento do Trairi'/>
              <Picker.Item value='' label='Sao Fernando'/>
              <Picker.Item value='' label='Sao Francisco do Oeste'/>
              <Picker.Item value='' label='Sao Goncalo do Amarante'/>
              <Picker.Item value='' label='Sao Joao do Sabugi'/>
              <Picker.Item value='' label='Sao Jose de Mipibu'/>
              <Picker.Item value='' label='Sao Jose do Campestre'/>
              <Picker.Item value='' label='Sao Jose do Serido'/>
              <Picker.Item value='' label='Sao Miguel de Touros'/>
              <Picker.Item value='' label='Sao Miguel'/>
              <Picker.Item value='' label='Sao Paulo do Potengi'/>
              <Picker.Item value='' label='Sao Pedro'/>
              <Picker.Item value='' label='Sao Rafael'/>
              <Picker.Item value='' label='Sao Tome'/>
              <Picker.Item value='' label='Sao Vicente'/>
              <Picker.Item value='' label='Senador Eloi de Souza'/>
              <Picker.Item value='' label='Senador Georgino Avelino'/>
              <Picker.Item value='' label='Serra Negra do Norte'/>
              <Picker.Item value='' label='Serra de Sao Bento'/>
              <Picker.Item value='' label='Serra do Mel'/>
              <Picker.Item value='' label='Serrinha dos Pintos'/>
              <Picker.Item value='' label='Serrinha'/>
              <Picker.Item value='' label='Severiano Melo'/>
              <Picker.Item value='' label='Sitio Novo'/>
              <Picker.Item value='' label='Taboleiro Grande'/>
              <Picker.Item value='' label='Taipu'/>
              <Picker.Item value='' label='Tangara'/>
              <Picker.Item value='' label='Tenente Ananias'/>
              <Picker.Item value='' label='Tenente Laurentino Cruz'/>
              <Picker.Item value='' label='Tibau do Sul'/>
              <Picker.Item value='' label='Tibau'/>
              <Picker.Item value='' label='Timbauba dos Batistas'/>
              <Picker.Item value='' label='Touros'/>
              <Picker.Item value='' label='Triunfo Potiguar'/>
              <Picker.Item value='' label='Umarizal'/>
              <Picker.Item value='' label='Upanema'/>
              <Picker.Item value='' label='Varzea'/>
              <Picker.Item value='' label='Venha-Ver'/>
              <Picker.Item value='' label='Vera Cruz'/>
              <Picker.Item value='' label='Vicosa'/>
              <Picker.Item value='' label='Vila Flor'/>
          </Picker>
          <PieChart
            style={{
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 30,
              marginLeft: 10,
              elevation: 1,
            }}
            data={this.dataPie}
            width={0.95 * Dimensions.get('window').width} // from react-native
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
            backgroundColor="#ffffff"
            paddingLeft="15"
            absolute
          />
        </ScrollView>
      </View>
    );
  }
}