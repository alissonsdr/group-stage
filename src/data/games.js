import senegal from '../img/senegal.png'
import holanda from '../img/holanda.png'
import qatar from '../img/qatar.png'
import equador from '../img/equador.png'

export const teamsInfos = [
    {team: 'Senegal', image: senegal},
    {team: 'Holanda', image: holanda},
    {team: 'Qatar', image: qatar},
    {team: 'Equador', image: equador}
]

export const games = [
  { 
      homeTeam: teamsInfos[0].team, 
      awayTeam: teamsInfos[1].team, 
      dateGame: '21/04',
      homeImage: teamsInfos[0].image,
      awayImage: teamsInfos[1].image,
      scoreHome: 0,
      scoreAway: 0
  },
  { 
      homeTeam: teamsInfos[3].team, 
      awayTeam: teamsInfos[2].team, 
      dateGame: '23/04',
      homeImage: teamsInfos[3].image,
      awayImage: teamsInfos[2].image,
      scoreHome: 0,
      scoreAway: 0
  },
  { 
      homeTeam: teamsInfos[3].team, 
      awayTeam: teamsInfos[0].team, 
      dateGame: '25/04',
      homeImage: teamsInfos[3].image,
      awayImage: teamsInfos[0].image,
      scoreHome: 0,
      scoreAway: 0
  },
  { 
      homeTeam: teamsInfos[1].team, 
      awayTeam: teamsInfos[2].team, 
      dateGame: '28/04',
      homeImage: teamsInfos[1].image,
      awayImage: teamsInfos[2].image,
      scoreHome: 0,
      scoreAway: 0
  },
  { 
      homeTeam: teamsInfos[2].team, 
      awayTeam: teamsInfos[0].team, 
      dateGame: '20/04',
      homeImage: teamsInfos[2].image,
      awayImage: teamsInfos[0].image,
      scoreHome: 0,
      scoreAway: 0
  },
  { 
      homeTeam: teamsInfos[1].team, 
      awayTeam: teamsInfos[3].team, 
      dateGame: '25/04',
      homeImage: teamsInfos[1].image,
      awayImage: teamsInfos[3].image,
      scoreHome: 0,
      scoreAway: 0
  }
];

