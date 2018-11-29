import { StyleSheet } from 'react-native';
import { Font } from '../../assets/fonts/font_names';

const color = 'rgba(102, 102, 102, 0.5)';
const dark = 'rgba(0, 0, 0, 0.7)';

export default StyleSheet.create({
  /* estilo da pag de Setup e comuns */
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sub_title_1: {
    fontFamily: Font.ALight,
    fontSize: 27,
    color: 'black',
    marginLeft: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
  containerTablet: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 4,
  },
  subtitle: {
    fontFamily: Font.ALight,
    margin: 5,
    marginTop: 35,
    marginLeft: 30,
    fontSize: 30,
    color: 'black'
  },
  txtStep1: {
    fontFamily: Font.ALight,
    marginTop: 5,
    marginLeft: 30,
    fontSize: 30,
  },
  txtStep: {
    fontFamily: Font.ALight,
    marginTop: 5,
    marginLeft: 100,
    fontSize: 30,
  },

  /* Pagina de catalog */
  /* Topo */
  titlePagina: {
    fontFamily: Font.AThin,
    fontSize: 42,
    color,
    marginLeft: 30,
    marginTop: 20,
  },
  titleNomeCliente: {
    fontFamily: Font.BRegular,
    fontSize: 18,
    marginTop: 20,
    color: dark,
  },
  codigoCliente: {
    fontFamily: Font.ARegular,
    fontSize: 14,
    color: dark,
  },
  setorCliente: {
    fontFamily: Font.ARegular,
    fontSize: 14,
    marginTop: 5,
    color,
  },

  /* Topo */
  grupoDestaque: {
    fontFamily: Font.BRegular,
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 15,
    color: dark,
  },

  /* Box de produto */
  nomeProduto: {
    fontFamily: Font.ABold,
    fontSize: 12,
    color: dark,
  },
  codigoProduto: {
    fontFamily: Font.ARegular,
    fontSize: 12,
    color: 'black',
  },

  /* Resumo Geral de Formatos de Texto */
  subHeader: {
    fontFamily: Font.ALight,
    fontSize: 32,
    color: dark,
    marginLeft: 30
  },
  h1: {
    fontFamily: Font.AThin,
    fontSize: 42,
    color,
  },
  h2: {
    fontFamily: Font.AThin,
    fontSize: 24,
    color: dark,
  },
  h3: {
    fontFamily: Font.ALight,
    fontSize: 24,
    color,
  },
  h4: {
    fontFamily: Font.ALight,
    fontSize: 20,
    color: dark,
  },
  h5: {
    fontFamily: Font.BRegular,
    fontSize: 18,
    color,
  },
  h6: {
    fontFamily: Font.ARegular,
    fontSize: 16,
    color,
  },
  h6Bold: {
    fontFamily: Font.ABold,
    fontSize: 16,
    color,
  },
  text: {
    fontFamily: Font.ALight,
    color: dark,
  },
  tag: {
    color: 'white',
    paddingLeft: 8,
    paddingRight: 8,
  },
  tagNovo: {
    backgroundColor: '#ffc69c',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tag1Giro: {
    color: 'white',
    paddingLeft: 8,
    paddingRight: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tag2Giro: {
    backgroundColor: '#678fd4',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tag3Giro: {
    backgroundColor: 'yellow',
    color: 'white',
    paddingLeft: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  /* PAGINA - Catalogo*/
  lbNCores: {
    paddingLeft: 5,
    paddingTop: 3,
    color: 'black'
  },

  /* Icons */
  iconClose: {
    fontFamily: Font.C,
    fontSize: 35,
    color
  },
  iconPlus: {
    fontFamily: Font.C,
    color: 'rgba(102, 102, 102, 0.5)',
    fontSize: 40
  },
  iconUnChecked: {
    fontFamily: Font.C,
    color: 'rgba(102, 102, 102, 0.5)',
    fontSize: 25
  },
  iconChecked: {
    fontFamily: Font.C,
    color: 'rgba(0, 122, 176, 0.85)',
    fontSize: 25,
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: '#0085B2',
    textShadowRadius: 8
  },
  iconGota: {
    fontFamily: Font.C,
    color: 'rgba(0, 122, 176, 0.85)',
    fontSize: 25,
    marginLeft: 6,
  },
  icon: {
    fontFamily: Font.C,
    color: 'rgba(0, 0, 0, 0.3)',
    fontSize: 34
  },
  icChosen: {
    color: '#0085B2',
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: '#0085B2',
    textShadowRadius: 12
  },
  icArrow: {
    position: 'absolute',
    fontSize: 22,
    color: '#0085B2',
  },

  /* Catalogo - label de dados do produto */
  columnHeader: {
    fontFamily: Font.BLight,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  columnName: {
    fontFamily: Font.ASemiBold,
    fontSize: 17,
    color: 'rgba(0, 0, 0, 0.8)'
  },
  columnValue: {
    fontFamily: Font.ALight,
    fontSize: 17,
    color: 'rgba(0, 0, 0, 0.8)'
  },

  popUp: {
    position: 'absolute',
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10
  },

  /* Input Text */
  vwIT: {
    justifyContent: 'center',
    height: 45,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#999',
    marginTop: 15,
    paddingTop: 2,
  },
  txtInput: {
    fontSize: 18,
    fontFamily: Font.ALight
  },
  menuIcon: {
    fontSize: 37,
    color: 'rgba(0, 0, 0, 0.3)',
    fontFamily: Font.C,
  },

  // Tabs
  vwActive: {
    width: 170,
    alignItems: 'center',
    borderTopColor: '#2D7A8D',
    borderTopWidth: 3,
    padding: 10,
  },
  vwNotActive: {
    width: 170,
    alignItems: 'center',
    padding: 10
  },
  txtActive: {
    fontFamily: Font.ASemiBold,
    fontSize: 20,
    color: '#2D7A8D',
    textAlign: 'center'
  },
  txtNotActive: {
    fontFamily: Font.AMedium,
    fontSize: 19,
    color: '#4F9CAF',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 4,
  },

  step1: {
    fontFamily: Font.ALight,
    marginLeft: 30,
    fontSize: 23,
  },
  step: {
    fontFamily: Font.ALight,
    marginLeft: 25,
    fontSize: 23,
  },
});
