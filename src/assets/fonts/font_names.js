export const Font = {
    ARegular: 'EncodeSans-Regular',
    AThin: 'EncodeSans-Thin',
    AMedium: 'EncodeSans-Medium',
    ALight: 'EncodeSans-Light',
    ASemiBold: 'EncodeSans-SemiBold',
    ABold: 'EncodeSans-Bold',

    BRegular: 'EncodeSansCondensed-Regular',
    BThin: 'EncodeSansCondensed-Thin',
    BMedium: 'EncodeSansCondensed-Medium',
    BBold: 'EncodeSansCondensed-Bold',
    BLight: 'EncodeSansCondensed-Light',
    ASemiBold: 'EncodeSansCondensed-SemiBold',
    BBold: 'EncodeSansCondensed-Bold',

    C: 'every_products',
};

// Para adicionar uma fonte nova:
// 1. Adicione os arquivos no repositório
// 2. Adicione uma key:value neste arquivo para ser referenciada pelo app.
// Sendo key = LetraQualquer+FontWeight e value = Nome que será usado no app
// 3. Adicione o export da fonte no index.js para ser referenciado 
// quando for usar o @font-face na web.
// * O nome da fonte será o mesmo usado pelo @font-face localizado no App.js 
// Uso:
// Importar este arquivo e usar no fontFamily do style 
// { fontFamily: Font.ARegular }