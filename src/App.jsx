import Card from "./Components/Card/Card";
//Спочатку зробив через import зображення import backgroundPhoto from  './img/photo1.jpg' 

function App() {

const url = 'https://s3-alpha-sig.figma.com/img/ed5e/c1e7/3a025d2707ff27cff79cc40143e9cb6d?Expires=1676246400&Signature=fwI4tnxjUscePxZYGkyRZ0yu0vrfjrlG7JlbMBh-kOp7zR-UIcBNF9U2qy7KST9fef-Zbu8fop6HP0gt7Rdyg8bQGkX~JIPp53-lPr5Aeye6XM4IhW4mdMFBgVUMAtHcvdhew3JUQNMSs1pNTkRd9A67jse5rl4vuYSL6kCo2hW2C5KS7DedVT-DsPxG0-aANjW~Jp1Yv~kQkFz1CnFt5~ODH~mvHu8lHuDmtwYUw1Q4LwSN3v2k-48u4PEdP~TiQ91UUVJ0kMEBuh9G68VhZvdpNHSMHnZ2QRMMtTQZ6vvpgD3--KX0xS8UgZ4nWG9FYSm~HIsOupySx8qiQCPuHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'


  return (
    <div className="App">
       <Card img={url} title="UX Design : How To Implement Usability Testing"
        author="Alfredo Rhiel Madsen" rating={4.5} students='500 Student'  duration='1h 30m' modules='5 Modul' level="Beginner"/>
               <Card img={url} title="UX Design : How To Implement Usability Testing"
        author="Alfredo Rhiel Madsen" rating={4.5} students='500 Student'  duration='1h 30m' modules='5 Modul' level="Intermediate"/>
               <Card img={url} title="UX Design : How To Implement Usability Testing"
        author="Alfredo Rhiel Madsen" rating={4.5} students='500 Student'  duration='1h 30m' modules='5 Modul' level="Master"/>
    </div>
  );
}

export default App;
