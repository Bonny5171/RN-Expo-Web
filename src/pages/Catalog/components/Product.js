import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, Animated, Platform } from 'react-native';
import styles from '../../../assets/styles/global';
import {
  grades0, grades2, grades3, grades4, grades5, grades6, grades7, grades8, grades9, grades10,
  grades11, grades12, grades13, grades14, grades15, grades16, grades17, grades18, grades19,
} from './Mock';
import { Fade } from '../../../components';

class Product extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { keyDestaque, keyProduct, ponteiroProduto } = this.props;
    const active = keyDestaque === ponteiroProduto[0] && keyProduct === ponteiroProduto[1];
    const nextActive = nextProps.keyDestaque === nextProps.ponteiroProduto[0] && nextProps.keyProduct === nextProps.ponteiroProduto[1];
    if (active !== nextActive) return true;
    if (this.props.selectList !== nextProps.selectList) return true;
    if (this.state.selected !== nextState.selected) return true;
    if (this.props.isHidden !== nextProps.isHidden) return true;

    return false;
  }
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      selected: false,
    };

    // Referencia de estrutura JSON do produto
    this.product = {
      name: '',
      code: '',
      regionalRanking: '',
      regionalSales: '', // Em porcentagem
      nationalRanking: '',
      nationalSales: '', // Em porcentagem
      tag1: '',
      tag2: '',
      tag3: '',
      price: 0,
      group: 0,
      category: '',
      line: '',
      colors: [],
      colorsLength: 0, // Usado no componente de detalhe do produto, <DetailProduct>; para o total de cores do produto atual
      sizes: [], // Tamanhos de pares disponíveis
    };
  }

  animate(easing) {
    this.animatedValue.setValue(0);
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 1000,
          easing
        }
    ).start();
  }

  componentWillMount() {
    const {
      name,
      code,
      tag1,
      tag2,
      tag3,
    } = this.props;

    this.product = {
      name,
      code,
      regionalRanking: '12',
      regionalSales: '45',
      nationalRanking: '5',
      nationalSales: '86',
      tag1,
      tag2,
      tag3,
      price: 24.90,
      group: 20,
      category: 'CHINELO',
      line: 'FEMININA',
      colors: [...colors],
      colorsLength: colors.length,
      sizes: ['33/34', '35', '36', '37/38', '39/40', '40/41', '41/42', '43/44', '45/46', '47/48', '49/50'],
      currentGallery: '0000',
      gallery: [
        { key: '1', url: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png', selected: true },
        { key: '2', url: 'http://www.grendha.com.br/_arquivos/produtos_67_imagem_reduzida.png', selected: false },
        { key: '3', url: 'http://www.grendha.com.br/_arquivos/produtos_180_imagem_galeria_hover.png', selected: false },
        { key: '4', url: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png', selected: false },
      ],
    };
  }

  onSelected = () => {
    const selected = !this.state.selected;
    this.setState({ selected });
  };

  _renderTriangulo() {
    const { keyDestaque, keyProduct, ponteiroProduto } = this.props;
    const active = keyDestaque === ponteiroProduto[0] && keyProduct === ponteiroProduto[1];

    return (
      <View style={{
        justifyContent: 'flex-end',
        alignContent: 'flex-start',
        alignItems: 'center',
        width: 200,
      }}
      >
        <View style={[{
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderBottomWidth: 15,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: '#007ab0',
          position: 'relative',
          bottom: -3,
        }, active ? { borderLeftWidth: 30, borderRightWidth: 30 } : '']}
        />
      </View>
    );
  }

  _renderTags() {
    const { tags, } = this.props;
    let tagsArr = [];
    if (tags) {
      tagsArr = [];
      // Limitando número de tags temporariamente para 2
      tags.map((tag, index) => {
        if (index <= 1) tagsArr.push(tag);
      });
    }

    return (
      <View style={{
          position: 'absolute',
          elevation: 5,
          height: '70%',
          left: -10,
          justifyContent: 'flex-end',
        }}
      >
        {
          tagsArr.map(t => (
            <View key={t.label} style={{ padding: 2, paddingRight: 0 }}>
              <Text style={[styles.tag, { backgroundColor: t.color, paddingRight: 2 }]}>{t.label}</Text>
            </View>
          ))
        }
      </View>
    );
  }

  _renderInf() {
    const { name, code, isExpanded } = this.props;
    const text = isExpanded ? { margin: 1, color: '#979899' } : { margin: 1 };
    return (
      <View style={{
          position: 'absolute',
          height: '100%',
          left: 10,
          justifyContent: 'flex-end',
          paddingBottom: 8,
          marginTop: 4
        }}
      >
        <Text style={[styles.nomeProduto, text]}>{name.toUpperCase()}</Text>
        <Text style={[styles.codigoProduto, text]}>{code}</Text>
      </View>
    );
  }

  _renderImg() {
    return (
      <Image
        source={require('../../../assets/imgs/tenis.png')}
        style={
          {
            flex: 1,
            marginBottom: 40,
            width: 200,
            margin: Platform.OS === 'web' ? 15 : 0
          }
        }
        resizeMode="center"
      />
    );
  }

  render() {
    const { selected, } = this.state;
    const {
      keyProduct,
      keyDestaque,
      isHidden,
      isExpanded,
      acSelectProduct,
      acCurrentProduct,
      selectList,
      scrollToIndex,
      indexDestaque,
    } = this.props;

    const Triangulo = this._renderTriangulo();
    const Tags = this._renderTags();
    const Inf = this._renderInf();
    const ImageProduto = this._renderImg();

    let styleBorder;
    if (Platform.OS !== 'web') {
      styleBorder = {
        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 0.2,
      };
    }

    return (
      <Fade visible={!(isHidden && isExpanded)}>
        <View style={{ marginHorizontal: 15 }}>
          <TouchableHighlight
            style={{
              height: 180,
              elevation: 2,
              borderColor: 'transparent',
              shadowColor: 'black',
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 10,
            }}
            onPress={() => {
              acCurrentProduct(this.product);
              acSelectProduct(keyDestaque, keyProduct);
            }}
            onLongPress={() => this.props.acAssistant(this.product)}
            activeOpacity={0.8}
            animationVelocity={1}
            underlayColor="transparent"
          >
            <View style={
              [
                {
                  flex: 1,
                  width: 200,
                  backgroundColor: isExpanded ? '#CACBCB' : 'white',
                  /* Sombra */
                  shadowColor: 'black',
                  shadowOpacity: 0.2,
                  shadowOffset: { width: 0, height: 1 },
                  shadowRadius: 10,
                  elevation: 6,
                },
                styleBorder
              ]
            }
            >
              {ImageProduto}
              {
                <Fade visible={selectList} duration={300} style={{ position: 'absolute', right: 5, top: 10 }}>
                  <TouchableOpacity onPress={this.onSelected.bind(this)}>
                    { selected
                        ? <Text style={styles.iconChecked}>h</Text>
                        : <Text style={styles.iconUnChecked}>i</Text> }
                  </TouchableOpacity>
                </Fade>
              }
              {Inf}
            </View>
          </TouchableHighlight>
          {Tags}
          {Triangulo}
        </View>
      </Fade>
    );
  }
}

export default Product;

const colors = [
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0000',
    isChosen: true,
    isShowing: true,
    newColor: false,
    grades: grades0
  },
  {
    uri: 'http://www.grendha.com.br/_arquivos/produtos_67_imagem_reduzida.png',
    name: '0001',
    isChosen: true,
    isShowing: false,
    newColor: true,
    grades: grades2
  },
  {
    uri: 'http://www.grendha.com.br/_arquivos/produtos_180_imagem_galeria_hover.png',
    name: '0002',
    isChosen: true,
    isShowing: false,
    newColor: false,
    grades: grades3
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0003',
    isChosen: false,
    isShowing: false,
    newColor: true,
    grades: grades4
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0004',
    isChosen: false,
    isShowing: false,
    newColor: false,
    grades: grades5
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0005',
    isChosen: false,
    isShowing: false,
    newColor: false,
    grades: grades6
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0006',
    isChosen: false,
    isShowing: false,
    newColor: true,
    grades: grades7
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0007',
    isChosen: false,
    isShowing: false,
    newColor: false,
    grades: grades8
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0008',
    isChosen: false,
    isShowing: false,
    newColor: false,
    grades: grades9
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0009',
    isChosen: false,
    grades: grades10,
    isShowing: false,
    newColor: false,
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0010',
    isChosen: false,
    grades: grades11,
    isShowing: false,
    newColor: true,
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0011',
    isChosen: false,
    grades: grades12,
    isShowing: false,
    newColor: false,
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0012',
    isChosen: false,
    grades: grades13,
    isShowing: false,
    newColor: true,
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0013',
    isChosen: false,
    grades: grades14,
    isShowing: false,
    newColor: false,
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0014',
    isChosen: false,
    grades: grades15,
    isShowing: false,
    newColor: false,
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0015',
    isChosen: false,
    grades: grades16,
    isShowing: false,
    newColor: false,
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0016',
    isChosen: false,
    grades: grades17,
    isShowing: false,
    newColor: false,
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0017',
    isChosen: false,
    grades: grades18,
    isShowing: false,
    newColor: true,
  },
  {
    uri: 'https://perfectroad.files.wordpress.com/2012/04/zaxy_5.png',
    name: '0018',
    isChosen: false,
    grades: grades19,
    isShowing: false,
    newColor: false,
  },
];

