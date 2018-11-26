import { 
  ALight, AMedium, ARegular, AThin, ABold,
  BLight, BMedium, BRegular, BThin, BBold,
  C, ASemiBold, BSemiBold
} from '../fonts';


const iconFontStyles = `
  @font-face {
    src: url(${ALight});
    font-family: EncodeSans-Light;
  }

  @font-face {
    src: url(${AMedium});
    font-family: EncodeSans-Medium;
  }
  
  @font-face {
    src: url(${ARegular});
    font-family: EncodeSans-Regular;
  }
  
  @font-face {
    src: url(${AThin});
    font-family: EncodeSans-Thin;
  }
  @font-face {
    src: url(${ASemiBold});
    font-family: EncodeSans-SemiBold;
  }
  @font-face {
    src: url(${ABold});
    font-family: EncodeSans-Bold;
  }
  
  @font-face {
    src: url(${BLight});
    font-family: EncodeSansCondensed-Light;
  }
  
  @font-face {
    src: url(${BMedium});
    font-family: EncodeSansCondensed-Medium;
  }

  @font-face {
    src: url(${BRegular});
    font-family: EncodeSansCondensed-Regular;
  }
  @font-face {
    src: url(${BThin});
    font-family: EncodeSansCondensed-Thin;
  }
  @font-face {
    src: url(${BSemiBold});
    font-family: EncodeSansCondensed-SemiBold;
  }
  @font-face {
    src: url(${BBold});
    font-family: EncodeSansCondensed-Bold;
  }
  
  @font-face {
    src: url(${C});
    font-family: every_products;
  }      
`;

export default iconFontStyles;