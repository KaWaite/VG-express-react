const express = require("express");

const app = express();

app.get("/api/games", (req, res) => {
  const games = {
    PS4: [
      {
        id: 1,
        title: "Bloodborne",
        releaseDate: "2015",
        developer: "FromSoftware",
        genre: "action",
        score: "9.7",
        desc: `
          Bloodborne is a game from FromSoftware. Spicy jalapeno turkey prosciutto shank bresaola. Ball tip tongue tri-tip fatback ham hock turkey biltong leberkas. Picanha tail jowl beef ribs ribeye short ribs chuck rump turducken. Bacon ball tip ham hock prosciutto tail boudin swine alcatra brisket pork loin capicola tenderloin. Shank pastrami ribeye drumstick, porchetta landjaeger fatback pancetta tenderloin biltong alcatra short ribs tongue ham. Fatback jerky ham, alcatra capicola pork shank bacon flank shankle boudin chicken filet mignon ground round.
        
          Jowl shank hamburger, salami beef ribs beef tri-tip kevin pork chop frankfurter strip steak leberkas rump boudin. Turkey shankle andouille landjaeger ham pork spare ribs, hamburger corned beef jowl chuck short loin swine cow. Spare ribs brisket turkey prosciutto pastrami drumstick jerky shankle. Alcatra shankle picanha, chislic biltong drumstick cupim bresaola hamburger rump. Ball tip frankfurter meatball, cupim fatback cow turkey meatloaf pancetta bacon porchetta prosciutto.
          
          Meatball turducken kielbasa bacon boudin. Turkey filet mignon ribeye alcatra, porchetta landjaeger beef boudin shoulder picanha biltong fatback tail bacon sirloin. Chuck beef ribs ground round t-bone capicola. Venison meatloaf ground round pork belly chicken pork loin chuck. Turkey jerky t-bone porchetta pastrami, ham hock fatback frankfurter venison pork loin ball tip.`
      },
      {
        id: 2,
        title: "Death Stranding",
        releaseDate: "2019",
        developer: "Kojima Productions",
        genre: "sci-fi",
        score: "9.4",
        desc: `
          Death Stranding is a game from Kojima Productions. Spicy jalapeno turkey prosciutto shank bresaola. Ball tip tongue tri-tip fatback ham hock turkey biltong leberkas. Picanha tail jowl beef ribs ribeye short ribs chuck rump turducken. Bacon ball tip ham hock prosciutto tail boudin swine alcatra brisket pork loin capicola tenderloin. Shank pastrami ribeye drumstick, porchetta landjaeger fatback pancetta tenderloin biltong alcatra short ribs tongue ham. Fatback jerky ham, alcatra capicola pork shank bacon flank shankle boudin chicken filet mignon ground round.
        
          Jowl shank hamburger, salami beef ribs beef tri-tip kevin pork chop frankfurter strip steak leberkas rump boudin. Turkey shankle andouille landjaeger ham pork spare ribs, hamburger corned beef jowl chuck short loin swine cow. Spare ribs brisket turkey prosciutto pastrami drumstick jerky shankle. Alcatra shankle picanha, chislic biltong drumstick cupim bresaola hamburger rump. Ball tip frankfurter meatball, cupim fatback cow turkey meatloaf pancetta bacon porchetta prosciutto.
          
          Meatball turducken kielbasa bacon boudin. Turkey filet mignon ribeye alcatra, porchetta landjaeger beef boudin shoulder picanha biltong fatback tail bacon sirloin. Chuck beef ribs ground round t-bone capicola. Venison meatloaf ground round pork belly chicken pork loin chuck. Turkey jerky t-bone porchetta pastrami, ham hock fatback frankfurter venison pork loin ball tip.`
      },
      {
        id: 3,
        title: "Final Fantasy X",
        releaseDate: "2000",
        developer: "SquareEnix",
        genre: "RPG",
        score: "8.8",
        desc: `
          FFX is a game from SquareEnix. Spicy jalapeno turkey prosciutto shank bresaola. Ball tip tongue tri-tip fatback ham hock turkey biltong leberkas. Picanha tail jowl beef ribs ribeye short ribs chuck rump turducken. Bacon ball tip ham hock prosciutto tail boudin swine alcatra brisket pork loin capicola tenderloin. Shank pastrami ribeye drumstick, porchetta landjaeger fatback pancetta tenderloin biltong alcatra short ribs tongue ham. Fatback jerky ham, alcatra capicola pork shank bacon flank shankle boudin chicken filet mignon ground round.
        
          Jowl shank hamburger, salami beef ribs beef tri-tip kevin pork chop frankfurter strip steak leberkas rump boudin. Turkey shankle andouille landjaeger ham pork spare ribs, hamburger corned beef jowl chuck short loin swine cow. Spare ribs brisket turkey prosciutto pastrami drumstick jerky shankle. Alcatra shankle picanha, chislic biltong drumstick cupim bresaola hamburger rump. Ball tip frankfurter meatball, cupim fatback cow turkey meatloaf pancetta bacon porchetta prosciutto.
          
          Meatball turducken kielbasa bacon boudin. Turkey filet mignon ribeye alcatra, porchetta landjaeger beef boudin shoulder picanha biltong fatback tail bacon sirloin. Chuck beef ribs ground round t-bone capicola. Venison meatloaf ground round pork belly chicken pork loin chuck. Turkey jerky t-bone porchetta pastrami, ham hock fatback frankfurter venison pork loin ball tip.`
      }
    ],
    Switch: [
      {
        id: 4,
        title: "Mario",
        releaseDate: "2011",
        developer: "Nintendo",
        genre: "action",
        score: "9.7",
        desc: `
          Mario is a game from FromSoftware. Spicy jalapeno turkey prosciutto shank bresaola. Ball tip tongue tri-tip fatback ham hock turkey biltong leberkas. Picanha tail jowl beef ribs ribeye short ribs chuck rump turducken. Bacon ball tip ham hock prosciutto tail boudin swine alcatra brisket pork loin capicola tenderloin. Shank pastrami ribeye drumstick, porchetta landjaeger fatback pancetta tenderloin biltong alcatra short ribs tongue ham. Fatback jerky ham, alcatra capicola pork shank bacon flank shankle boudin chicken filet mignon ground round.
        
          Jowl shank hamburger, salami beef ribs beef tri-tip kevin pork chop frankfurter strip steak leberkas rump boudin. Turkey shankle andouille landjaeger ham pork spare ribs, hamburger corned beef jowl chuck short loin swine cow. Spare ribs brisket turkey prosciutto pastrami drumstick jerky shankle. Alcatra shankle picanha, chislic biltong drumstick cupim bresaola hamburger rump. Ball tip frankfurter meatball, cupim fatback cow turkey meatloaf pancetta bacon porchetta prosciutto.
          
          Meatball turducken kielbasa bacon boudin. Turkey filet mignon ribeye alcatra, porchetta landjaeger beef boudin shoulder picanha biltong fatback tail bacon sirloin. Chuck beef ribs ground round t-bone capicola. Venison meatloaf ground round pork belly chicken pork loin chuck. Turkey jerky t-bone porchetta pastrami, ham hock fatback frankfurter venison pork loin ball tip.`
      },
      {
        id: 5,
        title: "Pokemon",
        releaseDate: "2013",
        developer: "Level 1",
        genre: "sci-fi",
        score: "9.4",
        desc: `
          Pokemon is a game from FromSoftware. Spicy jalapeno turkey prosciutto shank bresaola. Ball tip tongue tri-tip fatback ham hock turkey biltong leberkas. Picanha tail jowl beef ribs ribeye short ribs chuck rump turducken. Bacon ball tip ham hock prosciutto tail boudin swine alcatra brisket pork loin capicola tenderloin. Shank pastrami ribeye drumstick, porchetta landjaeger fatback pancetta tenderloin biltong alcatra short ribs tongue ham. Fatback jerky ham, alcatra capicola pork shank bacon flank shankle boudin chicken filet mignon ground round.
        
          Jowl shank hamburger, salami beef ribs beef tri-tip kevin pork chop frankfurter strip steak leberkas rump boudin. Turkey shankle andouille landjaeger ham pork spare ribs, hamburger corned beef jowl chuck short loin swine cow. Spare ribs brisket turkey prosciutto pastrami drumstick jerky shankle. Alcatra shankle picanha, chislic biltong drumstick cupim bresaola hamburger rump. Ball tip frankfurter meatball, cupim fatback cow turkey meatloaf pancetta bacon porchetta prosciutto.
          
          Meatball turducken kielbasa bacon boudin. Turkey filet mignon ribeye alcatra, porchetta landjaeger beef boudin shoulder picanha biltong fatback tail bacon sirloin. Chuck beef ribs ground round t-bone capicola. Venison meatloaf ground round pork belly chicken pork loin chuck. Turkey jerky t-bone porchetta pastrami, ham hock fatback frankfurter venison pork loin ball tip.`
      },
      {
        id: 6,
        title: "Dragon Quest",
        releaseDate: "1993",
        developer: "SquareEnix",
        genre: "RPG",
        score: "8.8",
        desc: `
          Dragon Quest is a game from FromSoftware. Spicy jalapeno turkey prosciutto shank bresaola. Ball tip tongue tri-tip fatback ham hock turkey biltong leberkas. Picanha tail jowl beef ribs ribeye short ribs chuck rump turducken. Bacon ball tip ham hock prosciutto tail boudin swine alcatra brisket pork loin capicola tenderloin. Shank pastrami ribeye drumstick, porchetta landjaeger fatback pancetta tenderloin biltong alcatra short ribs tongue ham. Fatback jerky ham, alcatra capicola pork shank bacon flank shankle boudin chicken filet mignon ground round.
        
          Jowl shank hamburger, salami beef ribs beef tri-tip kevin pork chop frankfurter strip steak leberkas rump boudin. Turkey shankle andouille landjaeger ham pork spare ribs, hamburger corned beef jowl chuck short loin swine cow. Spare ribs brisket turkey prosciutto pastrami drumstick jerky shankle. Alcatra shankle picanha, chislic biltong drumstick cupim bresaola hamburger rump. Ball tip frankfurter meatball, cupim fatback cow turkey meatloaf pancetta bacon porchetta prosciutto.
          
          Meatball turducken kielbasa bacon boudin. Turkey filet mignon ribeye alcatra, porchetta landjaeger beef boudin shoulder picanha biltong fatback tail bacon sirloin. Chuck beef ribs ground round t-bone capicola. Venison meatloaf ground round pork belly chicken pork loin chuck. Turkey jerky t-bone porchetta pastrami, ham hock fatback frankfurter venison pork loin ball tip.`
      }
    ],
    XboxOne: [
      {
        id: 7,
        title: "Gears of War",
        releaseDate: "2011",
        developer: "IDontKnow",
        genre: "action",
        score: "9.7",
        desc: `
          Gears of War is a game from FromSoftware. Spicy jalapeno turkey prosciutto shank bresaola. Ball tip tongue tri-tip fatback ham hock turkey biltong leberkas. Picanha tail jowl beef ribs ribeye short ribs chuck rump turducken. Bacon ball tip ham hock prosciutto tail boudin swine alcatra brisket pork loin capicola tenderloin. Shank pastrami ribeye drumstick, porchetta landjaeger fatback pancetta tenderloin biltong alcatra short ribs tongue ham. Fatback jerky ham, alcatra capicola pork shank bacon flank shankle boudin chicken filet mignon ground round.
        
          Jowl shank hamburger, salami beef ribs beef tri-tip kevin pork chop frankfurter strip steak leberkas rump boudin. Turkey shankle andouille landjaeger ham pork spare ribs, hamburger corned beef jowl chuck short loin swine cow. Spare ribs brisket turkey prosciutto pastrami drumstick jerky shankle. Alcatra shankle picanha, chislic biltong drumstick cupim bresaola hamburger rump. Ball tip frankfurter meatball, cupim fatback cow turkey meatloaf pancetta bacon porchetta prosciutto.
          
          Meatball turducken kielbasa bacon boudin. Turkey filet mignon ribeye alcatra, porchetta landjaeger beef boudin shoulder picanha biltong fatback tail bacon sirloin. Chuck beef ribs ground round t-bone capicola. Venison meatloaf ground round pork belly chicken pork loin chuck. Turkey jerky t-bone porchetta pastrami, ham hock fatback frankfurter venison pork loin ball tip.`
      },
      {
        id: 8,
        title: "Forza",
        releaseDate: "201234",
        developer: "Level 3434",
        genre: "Racing",
        score: "9",
        desc: `
          Forza is a game from FromSoftware. Spicy jalapeno turkey prosciutto shank bresaola. Ball tip tongue tri-tip fatback ham hock turkey biltong leberkas. Picanha tail jowl beef ribs ribeye short ribs chuck rump turducken. Bacon ball tip ham hock prosciutto tail boudin swine alcatra brisket pork loin capicola tenderloin. Shank pastrami ribeye drumstick, porchetta landjaeger fatback pancetta tenderloin biltong alcatra short ribs tongue ham. Fatback jerky ham, alcatra capicola pork shank bacon flank shankle boudin chicken filet mignon ground round.
        
          Jowl shank hamburger, salami beef ribs beef tri-tip kevin pork chop frankfurter strip steak leberkas rump boudin. Turkey shankle andouille landjaeger ham pork spare ribs, hamburger corned beef jowl chuck short loin swine cow. Spare ribs brisket turkey prosciutto pastrami drumstick jerky shankle. Alcatra shankle picanha, chislic biltong drumstick cupim bresaola hamburger rump. Ball tip frankfurter meatball, cupim fatback cow turkey meatloaf pancetta bacon porchetta prosciutto.
          
          Meatball turducken kielbasa bacon boudin. Turkey filet mignon ribeye alcatra, porchetta landjaeger beef boudin shoulder picanha biltong fatback tail bacon sirloin. Chuck beef ribs ground round t-bone capicola. Venison meatloaf ground round pork belly chicken pork loin chuck. Turkey jerky t-bone porchetta pastrami, ham hock fatback frankfurter venison pork loin ball tip.`
      },
      {
        id: 9,
        title: "Halo",
        releaseDate: "2002",
        developer: "XboxDevTeam",
        genre: "Shooter",
        score: "6.5",
        desc: `
          Halo is a game from FromSoftware. Spicy jalapeno turkey prosciutto shank bresaola. Ball tip tongue tri-tip fatback ham hock turkey biltong leberkas. Picanha tail jowl beef ribs ribeye short ribs chuck rump turducken. Bacon ball tip ham hock prosciutto tail boudin swine alcatra brisket pork loin capicola tenderloin. Shank pastrami ribeye drumstick, porchetta landjaeger fatback pancetta tenderloin biltong alcatra short ribs tongue ham. Fatback jerky ham, alcatra capicola pork shank bacon flank shankle boudin chicken filet mignon ground round.
        
          Jowl shank hamburger, salami beef ribs beef tri-tip kevin pork chop frankfurter strip steak leberkas rump boudin. Turkey shankle andouille landjaeger ham pork spare ribs, hamburger corned beef jowl chuck short loin swine cow. Spare ribs brisket turkey prosciutto pastrami drumstick jerky shankle. Alcatra shankle picanha, chislic biltong drumstick cupim bresaola hamburger rump. Ball tip frankfurter meatball, cupim fatback cow turkey meatloaf pancetta bacon porchetta prosciutto.
          
          Meatball turducken kielbasa bacon boudin. Turkey filet mignon ribeye alcatra, porchetta landjaeger beef boudin shoulder picanha biltong fatback tail bacon sirloin. Chuck beef ribs ground round t-bone capicola. Venison meatloaf ground round pork belly chicken pork loin chuck. Turkey jerky t-bone porchetta pastrami, ham hock fatback frankfurter venison pork loin ball tip.`
      }
    ]
  };

  res.json(games);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
