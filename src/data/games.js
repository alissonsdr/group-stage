import senegal from '../img/senegal.png'
import holanda from '../img/holanda.png'
import qatar from '../img/qatar.png'
import equador from '../img/equador.png'

export const teamsImages = [
    {team: 'Senegal', image: senegal},
    {team: 'Holanda', image: holanda},
    {team: 'Qatar', image: qatar},
    {team: 'Equador', image: equador}
]

export const games = [
  { 
      homeTeam: teamsImages[0].team, 
      awayTeam: teamsImages[1].team, 
      dateGame: '21/04',
      homeImage: teamsImages[0].image,
      awayImage: teamsImages[1].image

  },
  { 
      homeTeam: teamsImages[3].team, 
      awayTeam: teamsImages[2].team, 
      dateGame: '23/04',
      homeImage: teamsImages[3].image,
      awayImage: teamsImages[2].image
  },
  { 
      homeTeam: teamsImages[3].team, 
      awayTeam: teamsImages[0].team, 
      dateGame: '25/04',
      homeImage: teamsImages[3].image,
      awayImage: teamsImages[0].image
  },
  { 
      homeTeam: teamsImages[1].team, 
      awayTeam: teamsImages[2].team, 
      dateGame: '25/04',
      homeImage: teamsImages[1].image,
      awayImage: teamsImages[2].image
  },
  { 
      homeTeam: teamsImages[2].team, 
      awayTeam: teamsImages[0].team, 
      dateGame: '25/04',
      homeImage: teamsImages[2].image,
      awayImage: teamsImages[0].image
  },
  { 
      homeTeam: teamsImages[1].team, 
      awayTeam: teamsImages[3].team, 
      dateGame: '25/04',
      homeImage: teamsImages[1].image,
      awayImage: teamsImages[3].image
  }
];

