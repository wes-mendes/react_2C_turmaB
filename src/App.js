import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card";
// import videos from "./json/videos.json";
import Category, {categories, filterCategory} from "./components/Category";

function App() {
  return (
    <>
      <Header />
      <Banner image='favoritos' />
      <Container>
        <body>
          {/* <h2>Curso React JS</h2>
          <section className="cards">
            {videos.map(video =><Card id={video.id} key={video.id}/>)}
          </section>

          <Category category={categories[0]}>
            {filterCategory(0).map(video =><Card id={video.id} key={video.id}/>)}
          </Category>

          <Category category={categories[1]}>
            {filterCategory(1).map(video =><Card id={video.id} key={video.id}/>)}
          </Category>  

          <Category category={categories[2]}>
            {filterCategory(2).map(video =><Card id={video.id} key={video.id}/>)}
          </Category>  

          <Category category={categories[3]}>
            {filterCategory(3).map(video =><Card id={video.id} key={video.id}/>)}
          </Category>  

          <Category category={categories[4]}>
            {filterCategory(4).map(video =><Card id={video.id} key={video.id}/>)}
          </Category>   */}
            {categories.map((category, index) =>
                <Category category={category}> 
                  {filterCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
                </Category>
              )}
        </body>
      </Container>
      <Footer />
    </>
  );
}

export default App;