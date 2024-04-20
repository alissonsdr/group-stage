import gremio from '../img/gremio.png'
import internacional from '../img/internacional.png'
import bahia from '../img/bahia.png'
import palmeiras from '../img/palmeiras.png'

export const images = [gremio, internacional, bahia, palmeiras]


export const games = [
  { 
      homeTeam: 'Grêmio', 
      awayTeam: 'Inter', 
      dateGame: '21/04',
      homeImage: images[0],
      awayImage: images[1]

  },
  { 
      homeTeam: 'Palmeiras', 
      awayTeam: 'Bahia', 
      dateGame: '23/04',
      homeImage: images[3],
      awayImage: images[2]
  },
  { 
      homeTeam: 'Palmeiras', 
      awayTeam: 'Grêmio', 
      dateGame: '25/04',
      homeImage: images[3],
      awayImage: images[0]
  },
  { 
      homeTeam: 'Inter', 
      awayTeam: 'Bahia', 
      dateGame: '25/04',
      homeImage: images[1],
      awayImage: images[2]
  },
  { 
      homeTeam: 'Bahia', 
      awayTeam: 'Grêmio', 
      dateGame: '25/04',
      homeImage: images[2],
      awayImage: images[0]
  },
  { 
      homeTeam: 'Inter', 
      awayTeam: 'Palmeiras', 
      dateGame: '25/04',
      homeImage: images[1],
      awayImage: images[3]
  }
];

