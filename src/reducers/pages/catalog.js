import { updateComponent, closePopUp, openClosePopUp } from './common/functions';

const cartDefault = {
  name: 'Carrinho Padrão',
  products: [],
  standard: true,
};

const products = [
  { key: '0', selected: false, isHidden: true, isExpanded: true, name: 'Produto BB', code: '53543', uri: '../../../assets/imgs/tenis.png', tags: [], },
  { key: '1', selected: false, isHidden: false, isExpanded: false, name: 'GRENDHA ARUBA CHIN AD', code: '12345', uri: '../../../assets/imgs/tenis.png', 
    tags: [ 
      { label: 'NOVO', color: 'red' },
      { label: '1 GIRO ', color: '#678fd4' },
      { label: '2 GIRO', color: '#FF0DFF' },
      { label: '3 GIRO', color: '#E80C7A' },
      { label: '4 GIRO', color: '#FF07A8' },
      { label: '5 GIRO', color: 'black' },
    ]},
  { key: '2', selected: false, isHidden: true, isExpanded: true, name: 'Produto BB', code: '53543', uri: '../../../assets/imgs/tenis.png', tags: [], },
  { key: '3', selected: false, isHidden: false, isExpanded: false, name: 'Produto CC', code: '96446', uri: '../../../assets/imgs/tenis.png', tags: [], },
  { key: '4', selected: false, isHidden: false, isExpanded: false, name: 'Produto DD', code: '46109', uri: '../../../assets/imgs/tenis.png', tags: [], },
  { key: '5', selected: false, isHidden: true, isExpanded: true, name: 'Produto EE', code: '48592', uri: '../../../assets/imgs/tenis.png', tags: [], },
  { key: '6', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '30967', uri: '../../../assets/imgs/tenis.png', tags: [], },
  { key: '7', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '23504', uri: '../../../assets/imgs/tenis.png', tags: [], },
  { key: '8', selected: false, isHidden: true, isExpanded: true, name: 'Produto FF', code: '23425', uri: '../../../assets/imgs/tenis.png', tags: [], },
  { key: '9', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '94055', uri: '../../../assets/imgs/tenis.png', tags: [], },
  { key: '10', selected: false, isHidden: false, isExpanded: false, name: 'Produto AA', code: '345934', uri: '../../../assets/imgs/tenis.png', tags: [], },
];

const products1 = [
  { key: '11', selected: false, isHidden: true, isExpanded: true, name: 'Produto AA', code: '12345', uri: '../../../assets/imgs/tenis.png', },
  { key: '12', selected: false, isHidden: false, isExpanded: false, name: 'Produto BB', code: '53543', uri: '../../../assets/imgs/tenis.png', },
  { key: '13', selected: false, isHidden: false, isExpanded: false, name: 'Produto CC', code: '96446', uri: '../../../assets/imgs/tenis.png', 
    tags: [ 
      { label: 'NOVO', color: 'red' },
      { label: '1 GIRO', color: '#678fd4' },
      { label: '2 GIRO', color: '#1299FF' },
      { label: '3 GIRO', color: '#750CE8' },
      { label: '4 GIRO', color: '#E89220' },
      { label: '5 GIRO', color: 'black' },
    ],
  },
  { key: '14', selected: false, isHidden: false, isExpanded: false, name: 'Produto DD', code: '46109', uri: '../../../assets/imgs/tenis.png', },
  { key: '15', selected: false, isHidden: false, isExpanded: false, name: 'Produto EE', code: '48592', uri: '../../../assets/imgs/tenis.png', },
  { key: '16', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '30967', uri: '../../../assets/imgs/tenis.png', },
  { key: '17', selected: false, isHidden: true, isExpanded: true, name: 'Produto FF', code: '23504', uri: '../../../assets/imgs/tenis.png', },
  { key: '18', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '23425', uri: '../../../assets/imgs/tenis.png', },
  { key: '19', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '94055', uri: '../../../assets/imgs/tenis.png', },
  { key: '20', selected: false, isHidden: false, isExpanded: false, name: 'Produto AA', code: '34594', uri: '../../../assets/imgs/tenis.png', },
];

const products2 = [
  { key: '21', selected: false, isHidden: false, isExpanded: false, name: 'Produto AA', code: '12345', uri: '../../../assets/imgs/tenis.png', },
  { key: '22', selected: false, isHidden: false, isExpanded: false, name: 'Produto BB', code: '53543', uri: '../../../assets/imgs/tenis.png', },
  { key: '23', selected: false, isHidden: false, isExpanded: false, name: 'Produto CC', code: '96446', uri: '../../../assets/imgs/tenis.png', },
  { key: '24', selected: false, isHidden: false, isExpanded: false, name: 'Produto DD', code: '46109', uri: '../../../assets/imgs/tenis.png', },
  { key: '25', selected: false, isHidden: true, isExpanded: true, name: 'Produto EE', code: '48592', uri: '../../../assets/imgs/tenis.png', },
  { key: '26', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '30967', uri: '../../../assets/imgs/tenis.png', },
  { key: '27', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '23504', uri: '../../../assets/imgs/tenis.png', },
  { key: '28', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '23425', uri: '../../../assets/imgs/tenis.png', },
  { key: '29', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '94055', uri: '../../../assets/imgs/tenis.png', },
  { key: '30', selected: false, isHidden: true, isExpanded: true, name: 'Produto AA', code: '35934', uri: '../../../assets/imgs/tenis.png', },
];

const products3 = [
  { key: '31', selected: false, isHidden: false, isExpanded: false, name: 'Produto AA', code: '12345', uri: '../../../assets/imgs/tenis.png', },
  { key: '32', selected: false, isHidden: false, isExpanded: false, name: 'Produto BB', code: '53543', uri: '../../../assets/imgs/tenis.png', },
  { key: '33', selected: false, isHidden: false, isExpanded: false, name: 'Produto CC', code: '96446', uri: '../../../assets/imgs/tenis.png', },
  { key: '34', selected: false, isHidden: false, isExpanded: false, name: 'Produto DD', code: '46109', uri: '../../../assets/imgs/tenis.png', },
  { key: '35', selected: false, isHidden: false, isExpanded: false, name: 'Produto EE', code: '48592', uri: '../../../assets/imgs/tenis.png', },
  { key: '36', selected: false, isHidden: true, isExpanded: true, name: 'Produto FF', code: '30967', uri: '../../../assets/imgs/tenis.png', },
  { key: '37', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '23504', uri: '../../../assets/imgs/tenis.png', },
  { key: '38', selected: false, isHidden: true, isExpanded: true, name: 'Produto FF', code: '23425', uri: '../../../assets/imgs/tenis.png', },
  { key: '39', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '94055', uri: '../../../assets/imgs/tenis.png', },
  { key: '40', selected: false, isHidden: false, isExpanded: false, name: 'Produto AA', code: '34534', uri: '../../../assets/imgs/tenis.png', },
];

const products4 = [
  { key: '41', selected: false, isHidden: false, isExpanded: false, name: 'Produto AA', code: '12345', uri: '../../../assets/imgs/tenis.png', },
  { key: '42', selected: false, isHidden: false, isExpanded: false, name: 'Produto BB', code: '53543', uri: '../../../assets/imgs/tenis.png', },
  { key: '43', selected: false, isHidden: false, isExpanded: false, name: 'Produto CC', code: '96446', uri: '../../../assets/imgs/tenis.png', },
  { key: '44', selected: false, isHidden: true, isExpanded: true, name: 'Produto DD', code: '46109', uri: '../../../assets/imgs/tenis.png', },
  { key: '45', selected: false, isHidden: true, isExpanded: true, name: 'Produto EE', code: '48592', uri: '../../../assets/imgs/tenis.png', },
  { key: '46', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '30967', uri: '../../../assets/imgs/tenis.png', },
  { key: '47', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '23504', uri: '../../../assets/imgs/tenis.png', },
  { key: '48', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '23425', uri: '../../../assets/imgs/tenis.png', },
  { key: '49', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '94055', uri: '../../../assets/imgs/tenis.png', },
  { key: '50', selected: false, isHidden: false, isExpanded: false, name: 'Produto AA', code: '34934', uri: '../../../assets/imgs/tenis.png', },
];

const products5 = [
  { key: '51', selected: false, isHidden: true, isExpanded: true, name: 'Produto AA', code: '12345', uri: '../../../assets/imgs/tenis.png', },
  { key: '52', selected: false, isHidden: false, isExpanded: false, name: 'Produto BB', code: '53543', uri: '../../../assets/imgs/tenis.png', },
  { key: '53', selected: false, isHidden: false, isExpanded: false, name: 'Produto CC', code: '96446', uri: '../../../assets/imgs/tenis.png', },
  { key: '54', selected: false, isHidden: false, isExpanded: false, name: 'Produto DD', code: '46109', uri: '../../../assets/imgs/tenis.png', },
  { key: '55', selected: false, isHidden: false, isExpanded: false, name: 'Produto EE', code: '48592', uri: '../../../assets/imgs/tenis.png', },
  { key: '56', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '30967', uri: '../../../assets/imgs/tenis.png', },
  { key: '57', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '23504', uri: '../../../assets/imgs/tenis.png', },
  { key: '58', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '23425', uri: '../../../assets/imgs/tenis.png', },
  { key: '59', selected: false, isHidden: false, isExpanded: false, name: 'Produto FF', code: '94055', uri: '../../../assets/imgs/tenis.png', },
  { key: '60', selected: false, isHidden: true, isExpanded: true, name: 'Produto AA', code: '34534', uri: '../../../assets/imgs/tenis.png', },
];

const sumaryEmail = {
  products: [
    {
                         key: '1',
                        name: 'GRENDHA ARUBA CHIM AD',
                        code: '17113',
              imagemSelected: true,
      cartelaDeCoresSelected: false,
              gradesSelected: false,
          composicaoSelected: false,
    },
    {
                        key: '2',
                      name: 'MORMAII QUIVER II DEDO AD',
                      code: '15450',
            imagemSelected: false,
      cartelaDeCoresSelected: true,
            gradesSelected: true,
        composicaoSelected: false,
    },
    {
                        key: '3',
                      name: 'AVAIANA DE PAU',
                      code: '66666',
            imagemSelected: false,
      cartelaDeCoresSelected: false,
            gradesSelected: false,
        composicaoSelected: false,
    }
  ],
};

const INITIAL_STATE = {
  buttons: [
    {
      name: 'price',
      isChosen: false,
    },
    {
      name: 'mail',
      isChosen: false,
    },
    {
      name: 'cart',
      isChosen: false
    },
    {
      name: 'filter',
      isChosen: false
    },
    {
      name: 'submenu',
      isChosen: false
    },
  ],

  dropdown: {
    // Carrinho atual
    current: cartDefault,
    isVisible: false
  },
  // Produto atual para preencher as Tabs
  currentProduct: {},
  // Variável para fazer as grades e cores escolhidas começarem com um 4x4
  startingGrid: false,
  // Assistente de seleção
  selectList: false,
  selectOpt: false,
  resumoCar: false,

  // Define lista para seleção de produto.
  selectedEmail: [],
  selectedCar: [],

  colorsPopUp: false,
  // View Assistente de seleção
  assistantSelection: {
    isOpen: false,
    product: {} // Calçado atual
  },
  // Cores disponíveis para o calçado atual
  // A cor atual é o indíce selecionado na lista da grade, ex. colors[currentColor].uri
  // As cores serão guardadas em um vetor contento os requires() que importam o endereço das respectivas cores
  currentColor: 0,
  // Grades disponíveis
  grades: [
    {
      isChosen: true,
      name: '0000',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: 4
        },
        {
          value: '35',
          quantity: 4
        },
        {
          value: '36',
          quantity: 4
        },
        {
          value: '37/38',
          quantity: ''
        },
        {
          value: '39/40',
          quantity: ''
        },
        {
          value: '40/41',
          quantity: ''
        },
        {
          value: '41/42',
          quantity: ''
        },
        {
          value: '43/44',
          quantity: ''
        },
        {
          value: '45/46',
          quantity: ''
        },
        {
          value: '47/48',
          quantity: ''
        },
        {
          value: '49/50',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0001',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: ''
        },
        {
          value: '35',
          quantity: 12
        },
        {
          value: '36',
          quantity: ''
        },
        {
          value: '37/38',
          quantity: ''
        },
        {
          value: '39/40',
          quantity: ''
        },
        {
          value: '40/41',
          quantity: ''
        },
        {
          value: '41/42',
          quantity: ''
        },
        {
          value: '43/44',
          quantity: ''
        },
        {
          value: '45/46',
          quantity: ''
        },
        {
          value: '47/48',
          quantity: ''
        },
        {
          value: '49/50',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0002',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: 1
        },
        {
          value: '35',
          quantity: 8
        },
        {
          value: '36',
          quantity: 3
        },
        {
          value: '37/38',
          quantity: ''
        },
        {
          value: '39/40',
          quantity: ''
        },
        {
          value: '40/41',
          quantity: ''
        },
        {
          value: '41/42',
          quantity: ''
        },
        {
          value: '43/44',
          quantity: ''
        },
        {
          value: '45/46',
          quantity: ''
        },
        {
          value: '47/48',
          quantity: ''
        },
        {
          value: '49/50',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0003',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: 4
        },
        {
          value: '35',
          quantity: 4
        },
        {
          value: '36',
          quantity: 3
        },
        {
          value: '37/38',
          quantity: ''
        },
        {
          value: '39/40',
          quantity: ''
        },
        {
          value: '40/41',
          quantity: ''
        },
        {
          value: '41/42',
          quantity: ''
        },
        {
          value: '43/44',
          quantity: ''
        },
        {
          value: '45/46',
          quantity: ''
        },
        {
          value: '47/48',
          quantity: ''
        },
        {
          value: '49/50',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0004',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: 2
        },
        {
          value: '35',
          quantity: 4
        },
        {
          value: '36',
          quantity: 2
        },
        {
          value: '37/38',
          quantity: 2
        },
        {
          value: '39/40',
          quantity: ''
        },
        {
          value: '40/41',
          quantity: ''
        },
        {
          value: '41/42',
          quantity: ''
        },
        {
          value: '43/44',
          quantity: ''
        },
        {
          value: '45/46',
          quantity: ''
        },
        {
          value: '47/48',
          quantity: ''
        },
        {
          value: '49/50',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0005',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: ''
        },
        {
          value: '35',
          quantity: 4
        },
        {
          value: '36',
          quantity: ''
        },
        {
          value: '37/38',
          quantity: 4
        },
        {
          value: '39/40',
          quantity: ''
        },
        {
          value: '40/41',
          quantity: ''
        },
        {
          value: '41/42',
          quantity: ''
        },
        {
          value: '43/44',
          quantity: ''
        },
        {
          value: '45/46',
          quantity: ''
        },
        {
          value: '47/48',
          quantity: ''
        },
        {
          value: '49/50',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0006',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: ''
        },
        {
          value: '35',
          quantity: ''
        },
        {
          value: '36',
          quantity: ''
        },
        {
          value: '37/38',
          quantity: ''
        },
        {
          value: '39/40',
          quantity: ''
        },
        {
          value: '40/41',
          quantity: ''
        },
        {
          value: '41/42',
          quantity: ''
        },
        {
          value: '43/44',
          quantity: ''
        },
        {
          value: '45/46',
          quantity: ''
        },
        {
          value: '47/48',
          quantity: ''
        },
        {
          value: '49/50',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0007',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: ''
        },
        {
          value: '35',
          quantity: ''
        },
        {
          value: '36',
          quantity: 8
        },
        {
          value: '37/38',
          quantity: 4
        },
        {
          value: '39/40',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0008',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: ''
        },
        {
          value: '35',
          quantity: ''
        },
        {
          value: '36',
          quantity: ''
        },
        {
          value: '37/38',
          quantity: 12
        },
        {
          value: '39/40',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0009',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: ''
        },
        {
          value: '35',
          quantity: 4
        },
        {
          value: '36',
          quantity: 4
        },
        {
          value: '37/38',
          quantity: 4
        },
        {
          value: '39/40',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0010',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: 3
        },
        {
          value: '35',
          quantity: 3
        },
        {
          value: '36',
          quantity: 3
        },
        {
          value: '37/38',
          quantity: 3
        },
        {
          value: '39/40',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0011',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: 4
        },
        {
          value: '35',
          quantity: 4
        },
        {
          value: '36',
          quantity: ''
        },
        {
          value: '37/38',
          quantity: 4
        },
        {
          value: '39/40',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0012',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: ''
        },
        {
          value: '35',
          quantity: ''
        },
        {
          value: '36',
          quantity: ''
        },
        {
          value: '37/38',
          quantity: ''
        },
        {
          value: '39/40',
          quantity: 12
        },
      ]
    },
    {
      isChosen: true,
      name: '0013',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: ''
        },
        {
          value: '35',
          quantity: 4
        },
        {
          value: '36',
          quantity: 3
        },
        {
          value: '37/38',
          quantity: 1
        },
        {
          value: '39/40',
          quantity: 5
        },
      ]
    },
    {
      isChosen: true,
      name: '0014',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: 6
        },
        {
          value: '35',
          quantity: ''
        },
        {
          value: '36',
          quantity: 6
        },
        {
          value: '37/38',
          quantity: ''
        },
        {
          value: '39/40',
          quantity: ''
        },
      ]
    },
    {
      isChosen: true,
      name: '0015',
      pairs: 12,
      sizes: [
        {
          value: '33/34',
          quantity: ''
        },
        {
          value: '35',
          quantity: 4
        },
        {
          value: '36',
          quantity: 6
        },
        {
          value: '37/38',
          quantity: ''
        },
        {
          value: '39/40',
          quantity: 2
        },
      ]
    },
  ],

  assistantPopUps: [
    {
      name: 'colors',
      isChosen: false
    },
    {
      name: 'grades',
      isChosen: false
    }
  ],

  currentGrade: {
    name: '0000',
    pairs: 12,
    sizes: [
      {
        value: '33/34',
        quantity: ''
      },
      {
        value: '35',
        quantity: ''
      },
      {
        value: '36',
        quantity: ''
      },
      {
        value: '37/38',
        quantity: 12
      },
      {
        value: '39/40',
        quantity: ''
      },
    ]
  },

  selectedCart: {
    current: cartDefault,
    isVisible: false,
    isOpen: false,
  },

  cloneColorsStores: false,

  carts: [
    {
      selected: false,
      name: 'Pré data em XX/XX',
      products: [
        {
          key: '0',
          name: 'GRENDHA ARUBA CHIN AD',
          price: 24.90,
          code: 17113,
          group: 20,
          category: 'CHINELO',
          line: 'FEMININA',
          colors: [
            {
              uri: '',
              name: '0000',
              isChosen: true,
              grades: [
                {
                  name: '0000',
                  quantity: 0
                }
              ]
            },
            {
              uri: '',
              name: '0002',
              isChosen: true,
              grades: []
            }
          ],
          stores: [
            {
              name: 'XYZ',
              grades: []
            }
          ]
        },
      ]
    },
    {
      selected: false,
      name: 'Linha ABCD',
      products: [
        {
          key: '0',
          name: 'GRENDHA ARUBA CHIN AD',
          price: 24.90,
          code: 17113,
          group: 20,
          category: 'CHINELO',
          line: 'FEMININA',
        },
        {
          key: '1',
          name: 'GRENDHA',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '2',
          name: 'GRENDHA ARUBA CHIN ADB',
          price: 24.90,
          code: 17113,
          group: 20,
          category: 'CHINELO',
          line: 'FEMININA'
        },
        {
          key: '3',
          name: 'GRENDHA C',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
      ]
    },
    {
      selected: false,
      name: 'Comprador Fulano',
      products: [
        {
          key: '0',
          name: 'GRENDHA ARUBA CHIN AD',
          price: 24.90,
          code: 17113,
          group: 20,
          category: 'CHINELO',
          line: 'FEMININA'
        },
        {
          key: '1',
          name: 'GRENDHA',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '2',
          name: 'GRENDHA ARUBA CHIN ADB',
          price: 24.90,
          code: 17113,
          group: 20,
          category: 'CHINELO',
          line: 'FEMININA'
        },
        {
          key: '3',
          name: 'GRENDHA C',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '4',
          name: 'GRENDHA ARUBA CHIN ADD',
          price: 24.90,
          code: 17113,
          group: 20,
          category: 'CHINELO',
          line: 'FEMININA'
        },
        {
          key: '5',
          name: 'GRENDHA E',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '6',
          name: 'GRENDHA ARUBA CHIN ADF',
          price: 24.90,
          code: 17113,
          group: 20,
          category: 'CHINELO',
          line: 'FEMININA'
        },
        {
          key: '7',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '8',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '9',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '10',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '11',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '12',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '13',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '14',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '15',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '16',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },
        {
          key: '17',
          name: 'GRENDHA G',
          price: 24.90,
          code: 20113,
          group: 12,
          category: 'CHINELO',
          line: 'MASCULINA'
        },

      ]
    },
  ],

  stores: [],

  data: [
    { key: '0', exhibition: 'Destaque Rider', products },
    { key: '1', exhibition: 'Destaque Cartago', products: products1 },
    { key: '2', exhibition: 'Destaque Grendha', products: products2 },
    { key: '3', exhibition: 'Destaque Zaxy', products: products3 },
    { key: '4', exhibition: 'Destaque Ipanema', products: products4 },
    { key: '5', exhibition: 'Destaque Grendene kids', products: products5 },
  ],

  sumaryEmail,

  ponteiroProduto: ['', ''],

  produtosSelecionados: [],

  // selecao rapida
  btnMais: false,
  btnEnvelope: false,
  btnCarrinho: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'set_car_selected': {
      const { carts } = action.payload;
      return { ...state, carts };
    }
    case 'update_btn_mais': {
      const { btnMais } = action.payload;
      return { ...state, btnMais };
    }
    case 'update_btn_envelop': {
      const { btnEnvelope } = action.payload;
      return { ...state, btnEnvelope };
    }
    case 'update_btn_carrinho': {
      const { btnCarrinho } = action.payload;
      return { ...state, btnCarrinho };
    }
    case 'update_buttons': {
      const buttons = updateComponent(action.name, state.buttons);
      return { ...state, buttons };
    }
    case 'close_popup': {
      const buttons = closePopUp(state.buttons);
      return { ...state, buttons };
    }
    case 'openClose_dropdown': {
      const dropdown = { ...state.dropdown };
      dropdown.isVisible = !state.dropdown.isVisible;
      return { ...state, dropdown };
    }
    case 'current_dropdown': {
      const newState = currentDropDown({ ...state }, action.payload);
      return { ...state, ...newState };
    }


    case 'open_cart': {
      const { resumoCar } = action.payload;
      return { ...state, resumoCar };
    }


    case 'save_cart': {
      const carts = [...state.carts];
      // Adiciona novo cart no vetor
      carts.push(action.cart);
      return { ...state, carts };
    }
    case 'delete_cart': {
      const carts = [...state.carts];
      removeCart(carts, action.name);
      return { ...state, carts };
    }
    case 'add_products': {
      const dropdown = [...state.dropdown];
      // Adiciona novos produtos no carrinho atual
      dropdown.current.products.push(...action.products);
      return { ...state, dropdown };
    }
    case 'remove_product': {
      const dropdown = { ...state.dropdown };
      removeProduct(dropdown.current.products, action.name);
      return { ...state, dropdown };
    }
    case 'assistant_dropdown': {
      const selectedCart = { ...state.selectedCart };
      selectedCart.isVisible = !state.selectedCart.isVisible;
      return { ...state, selectedCart };
    }
    case 'openClose_assistant': {
      const selectedCart = { ...state.selectedCart };
      selectedCart.isOpen = !state.selectedCart.isOpen;
      return { ...state, selectedCart };
    }
    case 'select_product': {
      const { keyDestaque, keyProduct } = action;

      let novoPonteiro = ['', ''];

      // ponteiro verificador
      if (state.ponteiroProduto.toString() !== [keyDestaque, keyProduct].toString()) {
        novoPonteiro = [keyDestaque, keyProduct];
      }
      return { ...state, ponteiroProduto: novoPonteiro };
    }
    case 'assistant': {
      const newState = { ...state };
      newState.assistantSelection = { isOpen: !state.assistantSelection.isOpen, product: action.product };

      if (newState.assistantSelection.isOpen) {
        // Voltando valores dos inputs para 0
        newState.assistantSelection.product.colors.forEach(color => {
          color.grades.forEach(grade => {
            grade.quantity = '';
          });
        });
      }

      // Certifica que as grades de todas cores e lojas iniciem vazias
      // Deixa a primeira aba como inicial
      newState.stores = state.stores.map((store, index) => {
        // Para cada Cor
        const newColors = store.colors.map(color => {
          // Para cada Grade
          const newGrades = color.grades.map(grade => ({ ...grade, quantity: '' }));
          return { ...color, grades: newGrades };
        });
        return { ...store, colors: newColors, isActive: index === 0 };
      });

      return { ...state, ...newState };
    }
    case 'assistant_popup': {
      const assistantPopUps = openClosePopUp(action.name, [...state.assistantPopUps]);
      return { ...state, assistantPopUps };
    }
    case 'select_color': {
      const product = { ...state.assistantSelection.product };
      const colors = changeBoolean(product.colors, action.name);
      return {
        ...state,
        assistantSelection: {
          ...state.assistantSelection,
          product: {
            ...state.assistantSelection.product,
            colors
          }
        }
      };
    }
    case 'remove_color': {
      const colors = changeBoolean(state.assistantSelection.product.colors, action.name);
      return {
        ...state,
        assistantSelection: {
          ...state.assistantSelection,
          product: {
            ...state.assistantSelection.product,
            colors
          }
        }
      };
    }
    case 'current_color': {
      return { ...state, currentColor: action.position };
    }
    case 'update_grade_colors': {
      const colors = [...state.colors];
      for (let i = 0; i < state.grades.length; i += 1) {
        colors[i].grades = state.grades.map(grade => grade.isChosen ? { ...grade } : null);
      }
      return { ...state, colors };
    }
    case 'add_grade': {
      const colors = [...state.colors];
      colors.grades.push(action.grade);
      return { ...state, colors };
    }
    case 'selected_grade': {
      const grades = changeBoolean(state.grades, action.name);
      return { ...state, grades };
    }
    case 'colors_grades': {
      const newState = { ...state };
      newState.colors = action.colors;
      newState.colorsGradesUpdated = !state.colorsGradesUpdated;
      return { ...state, ...newState };
    }
    case 'text_grade': {
      // Muda o valor do texto de um Input
      const product = { ...state.assistantSelection.product };
      const newGrades = product.colors[action.color].grades.map((grade, index) => {
        if (index === action.grade) {
          return { ...grade, quantity: action.quantity };
        }
        return grade;
      });

      const newColors = product.colors.map((color, index) => {
        if (index === action.color) {
          return { ...color, grades: newGrades };
        }
        return color;
      });
      product.colors = newColors;
      const assistantSelection = { ...state.assistantSelection, product };
      return { ...state, assistantSelection };
    }
    case 'insert_into_cart': {
      const selectedCart = { ...state.selectedCart };
      const { products } = selectedCart.current;
      const { product } = action;
      product.stores = [...state.stores];
      let inserted = false;

      // Salva o Grid Atual de Cores x Grade no Carrinho, de acordo com as suas respectivas lojas
      product.stores = state.stores.map(store => {
        if (store.isActive) {
          store.colors = state.assistantSelection.product.colors.map(color => ({ ...color }));
        } else if (state.cloneColorsStores) {
          // Aplica para todos os carrinhos se a variável de clone estiver true
          store.colors = state.assistantSelection.product.colors.map(color => ({ ...color }));
        }

        return store;
      });

      // Atualiza a lista de grades/cor caso  o produto ja esteja no carrinho
      products.some((curr, index) => {
        if (curr.name === product.name) {
          products.splice(index, 1, product);
          inserted = true;
          return true;
        }
        return false;
      });

      if (!inserted) {
        products.push(product);
      }
      const newState = {
        ...state,
        assistantSelection: {
          ...state.assistantSelection,
          product: { ...state.assistantSelection.product },
        },

      };

      newState.dropdown.current.products = selectedCart.current.products;

      return { ...state, ...newState };
    }
    case 'current_grade': {
      const currentGrade = { ...state.grades[action.grade] };
      return { ...state, currentGrade };
    }
    case 'select_product_list': {
      const { selectList } = action.payload;
      return { ...state, selectList };
    }
    case 'select_opt': {
      const { selectOpt } = action.payload;
      return { ...state, selectOpt };
    }
    case 'add_store': {
      const stores = [];

      action.stores.forEach((store, index) => {
        if (store.isChosen) {
          stores.push({
            name: store.name, // Nome da loja
            colors: [], // Cores contendo grades do produto atual
            isActive: index === 0 // INITIAL_STATE será sempre com a primeira aba ativa
          });
        }
      });

      return { ...state, stores };
    }
    case 'save_colors_store': {
      const colors = state.assistantSelection.product.colors.map(curr => ({ ...curr }));
      const stores = state.stores.map(store => {
        if (store.isActive) {
          return ({ ...store, colors });
        }

        return store;
      });
      return { ...state, stores };
    }
    case 'clone_colors': {
      return { ...state, cloneColorsStores: !state.cloneColorsStores };
    }
    case 'change_tab': {
      // Evitando mutações
      const newState = {
        ...state,
        assistantSelection: {
          ...state.assistantSelection,
          product: { ...state.assistantSelection.product },
        },

      };

      // Salva o Grid Atual de Cores x Grade na respectiva loja
      newState.stores = state.stores.map(store => {
        if (store.isActive) {
          store.colors = state.assistantSelection.product.colors.map(color => ({ ...color }));
        }

        return store;
      });

      // Muda Tab Ativa
      newState.stores = newState.stores.map((store) => {
        if (store.name === action.name) {
          if (store.colors.length === 0) {
            // Preenche com um vetor de grades para cada cor, caso não tenha ainda
            store.colors = state.assistantSelection.product.colors.map(color => {
              // Evitando mutação de objetos internos
              const grades = color.grades.map(grade => ({ ...grade }));
              return { ...color, grades };
            });

            store.colors.forEach((color, index) => {
              store.colors[index].grades = [];
              state.grades.forEach(grade => {
                store.colors[index].grades.push(
                  {
                    name: grade.name,
                    quantity: ''
                  }
                );
              });
            });
          }
          // Atualizando somente as grades e cores exibidas (Conforme alterada na tab ativa)
          // Pega o Grid de Cores x Grade da próxima loja
          newState.assistantSelection.product.colors = store.colors.map((color, indexColor) => {
            const { isChosen } = newState.assistantSelection.product.colors[indexColor];
            const grades = color.grades.map((grade, indexGrade) => {
              const { isChosen } = newState.grades[indexGrade];
              return { ...grade, isChosen };
            });
            return { ...color, grades, isChosen };
          });
          return { ...store, isActive: true };
        }
        return { ...store, isActive: false };
      });

      return { ...state, ...newState };
    }
    case 'current_product': {
      return { ...state, currentProduct: { ...action.product } };
    }
    case 'colors_popup': {
      return { ...state, colorsPopUp: !state.colorsPopUp };
    }
    case 'change_color': {
      const currentProduct = { ...state.currentProduct };
      currentProduct.colors = state.currentProduct.colors.map(color => color.name === action.name ? { ...color, isShowing: true } : { ...color, isShowing: false });
      return { ...state, currentProduct };
    }
    case 'update_gallery': {
      const gallery = state.currentProduct.gallery.map((x) => {
        if (x.key === action.itemKey) {
          x.selected = true;
        } else {
          x.selected = false;
        }
        return x;
      });

      return { ...state, currentProduct: { ...state.currentProduct, gallery } };
    }
    case 'change_gallery': {
      const gallery = state.currentProduct.gallery.map(source => {
        let url = '';
        state.currentProduct.colors.some(color => {
          if (color.name === action.payload) {
            url = color.uri;
            return true;
          }
          return false;
        });
        return { ...source, url };
      });

      const currentProduct = { ...state.currentProduct, currentGallery: action.payload, gallery };
      return { ...state, currentProduct };
    }
    case 'reset_colors': {
      return { ...state, colorsPopUp: INITIAL_STATE.colorsPopUp };
    }
    case 'expanded_catalog': {
      const data = toggleExpCatalog(state.data, action.catalog);
      return { ...state, data };
    }
    case 'selected_summary_email': {
      const { sumaryEmail } = state;
      const newSumaryEmail = {
        products: []
      };
      newSumaryEmail.products = sumaryEmail.products.map((item) => {
        if (item.key === action.payload.key) {
          return action.payload;
        }
        return item;
      });
      return { ...state, sumaryEmail: newSumaryEmail };
    }
    case 'starting_grid': {
      const newState = { ...state };
      // Inicia a grade com o número de elementos que passarmos no segundo parâmetro
      newState.assistantSelection.product.colors = chooseYElements(state.assistantSelection.product.colors, 3);
      newState.grades = chooseYElements(state.grades, 3);
      newState.startingGrid = true;
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};

const currentDropDown = (newState, nextCart) => {
  // Caso haja algum carrinho atual, salvamos ele na lista de dropdown novamente
  if (newState.dropdown.current.name !== '') {
    newState.carts.push(newState.dropdown.current);
  }

  removeCart(newState.carts, nextCart.name);

  // Atualizando o carrinho atual
  newState.dropdown.current = nextCart;

  return newState;
};

const removeCart = (carts, name) => {
  for (let i = carts.length - 1; i >= 0; i -= 1) {
    if (carts[i].name === name) {
      carts.splice(i, 1);
    }
  }
};

const removeProduct = (products, name) => {
  for (let i = products.length - 1; i >= 0; i -= 1) {
    if (products[i].name === name) {
      products.splice(i, 1);
    }
  }
};

const changeBoolean = (array, name) => {
  let updatedArray = [];

  updatedArray = array.map(curr => {
    if (curr.name === name) {
      return { ...curr, isChosen: !curr.isChosen };
    }
    return { ...curr };
  });

  return updatedArray;
};

const toggleExpCatalog = (data, isCatalog) => {
  const newData = data.map(section => toggleHiddenProducts(section, isCatalog));
  return newData;
};

const toggleHiddenProducts = (section, isCatalog) => {
  let newProducts = [];
  if (!isCatalog) {
    newProducts = section.products.map(product => product.isExpanded ? { ...product, isHidden: !product.isHidden } : product);
  } else {
    newProducts = section.products.map(product => !product.isHidden && product.isExpanded ? { ...product, isHidden: true } : product);
  }

  return { ...section, products: newProducts };
};

const chooseYElements = (array, number) => {
  const initialGrid = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i < number) {
      initialGrid.push({ ...array[i], isChosen: true });
    } else {
      initialGrid.push({ ...array[i], isChosen: false });
    }
  }

  return initialGrid;
};