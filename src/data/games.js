import senegal from '../img/senegal.png'
import holanda from '../img/holanda.png'
import qatar from '../img/qatar.png'
import equador from '../img/equador.png'

export const images = [senegal, holanda, qatar, equador]

export const teams = [
  {team: 'Senegal'},
  {team: 'Holanda'},
  {team: 'Qatar'},
  {team: 'Equador'}
]

export const games = [
  { 
      homeTeam: teams[0].team, 
      awayTeam: teams[1].team, 
      dateGame: '21/04',
      homeImage: images[0],
      awayImage: images[1]

  },
  { 
      homeTeam: teams[3].team, 
      awayTeam: teams[2].team, 
      dateGame: '23/04',
      homeImage: images[3],
      awayImage: images[2]
  },
  { 
      homeTeam: teams[3].team, 
      awayTeam: teams[0].team, 
      dateGame: '25/04',
      homeImage: images[3],
      awayImage: images[0]
  },
  { 
      homeTeam: teams[1].team, 
      awayTeam: teams[2].team, 
      dateGame: '25/04',
      homeImage: images[1],
      awayImage: images[2]
  },
  { 
      homeTeam: teams[2].team, 
      awayTeam: teams[0].team, 
      dateGame: '25/04',
      homeImage: images[2],
      awayImage: images[0]
  },
  { 
      homeTeam: teams[1].team, 
      awayTeam: teams[3].team, 
      dateGame: '25/04',
      homeImage: images[1],
      awayImage: images[3]
  }
];

