import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "md5";
import Footer from "../../components/Footer";
import ComicDetails from "../../components/ComicDetails";
import Loading from "../../components/Loading";

const baseUrl = "http://gateway.marvel.com/v1/public/comics?";

const publickey = "f231a167cd0d522d6b22e2ea076784df";
const privateKey = "1f744fe525aa09cf306bebfd56d8c37d0b9450e7";
const timeNow = Number(new Date());

const hash = md5(timeNow + privateKey + publickey);

export default function Home() {
  const [comicsData, setComicsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function getData() {
      setLoading(true);
      axios
        .get(
          `http://gateway.marvel.com/v1/public/comics?ts=${timeNow}&apikey=${publickey}&hash=${hash}`
        )
        .then(async (res) => {
          setComicsData(res.data.data.results.reverse());
          setComicsData((old) => [...old].sort());

          console.log("Comics -", comicsData);
          setLoading(false);
        })
        .catch((err) => {
          console.log("RESPONSE - ", err);
          setLoading(false);
        });
    }

    getData();
    comicsData.reverse();
  }, []);
  return (
    <>
      {/* ###### MODAL CLASS ########### */}
      <div class="modal fade" id="movie-modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-hero">
              <img
                src={require("../../assets/images/gotham.png")}
                alt="movie"
              />
              <div class="col-12 modal-hero-infos">
                <button class="btn btn-lg button-white">
                  <span class="mdi mdi-play"></span>
                  Assistir
                </button>
                <a
                  href="#"
                  class="
                  btn-custom-round
                  border-white
                  btn btn-lg
                  rounded-circle
                  opacity-50
                "
                >
                  <span class="mdi mdi-plus text-white"></span>
                </a>
                <a
                  href="#"
                  class="
                  btn-custom-round
                  border-white
                  btn btn-lg
                  rounded-circle
                  opacity-50
                "
                >
                  <span class="mdi mdi-thumb-up-outline text-white"></span>
                </a>
                <a
                  href="#"
                  class="
                  btn-custom-round
                  border-white
                  btn btn-lg
                  rounded-circle
                  opacity-50
                "
                >
                  <span class="mdi mdi-thumb-down-outline text-white"></span>
                </a>
              </div>
            </div>
            <div class="modal-infos">
              <div class="container">
                <div class="row">
                  <div class="col-7">
                    <p class="description-movie">
                      O detetive novato James Gordon luta contra o crime e a
                      corrupção em Gotham City para vingar o assassinato dos
                      pais de Bruce Wayne.
                    </p>
                  </div>
                  <div class="col-5">
                    <div class="cast-movie">
                      Elenco:
                      <text>
                        Ben McKenzie, Donal Logue, Jada Pinkett,
                        <a href="">mais</a>
                      </text>
                      <br />
                      <br />
                      Gêneros:
                      <text>
                        Séries baseadas em HQ, Séries dramáticas, Séries dos EUA
                      </text>
                      <br />
                      <br />
                      Cenas e momentos: <text>Empolgantes.</text>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-7">
                    <h3 class="text-white">Episódios</h3>
                  </div>
                  <div class="col-5 text-right">
                    <select class="form-control" id="seasons">
                      <option value="Temporada1">Temporada 1</option>
                      <option value="Temporada2">Temporada 2</option>
                      <option value="Temporada3">Temporada 3</option>
                      <option value="Temporada4">Temporada 4</option>
                      <option value="Temporada5">Temporada 5</option>
                    </select>
                  </div>
                </div>
                <br />
                <div class="row">
                  <ul class="episodes-list">
                    <li>
                      <div class="row">
                        <div class="col-1 my-auto text-center">
                          <h3 class="text-white">1</h3>
                        </div>
                        <div class="col-4">
                          <img
                            class="img-fluid"
                            src="./assets/images/episode1.jpeg"
                            alt="Episode 1"
                          />
                        </div>
                        <div class="col-7">
                          <h6 class="text-white">Piloto</h6>
                          <p class="text-muted">
                            O detetive novato James Gordon e seu parceiro Harvey
                            Bullock investigam o assassinato de um casal
                            milionário que deixou um menino de 12 anos chamado
                            Bruce Wayne.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-1 my-auto text-center">
                          <h3 class="text-white">2</h3>
                        </div>
                        <div class="col-4">
                          <img
                            class="img-fluid"
                            src="./assets/images/episode2.jpg"
                            alt="Episode 1"
                          />
                        </div>
                        <div class="col-7">
                          <h6 class="text-white">Selina Kyle</h6>
                          <p class="text-muted">
                            Os detetives Gordon e Bullock investigam uma
                            quadrilha de tráfico infantil que tem como alvo as
                            crianças de rua de Gotham, incluindo Selina Kyle.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-1 my-auto text-center">
                          <h3 class="text-white">3</h3>
                        </div>
                        <div class="col-4">
                          <img
                            class="img-fluid"
                            src="./assets/images/episode3.png"
                            alt="Episode 1"
                          />
                        </div>
                        <div class="col-7">
                          <h6 class="text-white">Baloeiro</h6>
                          <p class="text-muted">
                            Os detetives Gordon e Bullock vão a caça de um
                            justiceiro que está matando cidadãos corruptos de
                            Gotham, prendendo-os a balões meteorológicos.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ######  END MODAL CLASS ########### */}

      <div class="container-fluid">
        <header class="header-home row">
          <div class="col-1">
            <img
              src={require("../../assets/images/Group.png")}
              alt="Logo"
              class="logo-header-home"
            />
          </div>
          <div class="col-9">
            <ul class="menu-list">
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
            </ul>
          </div>
          <div class="col-2 icons-container">
            <a href="">
              <span class="mdi mdi-magnify"></span>
            </a>

            <a href="">
              <span class="mdi mdi-bell"></span>
            </a>
            <a href="">
              <span class="mdi mdi-cart "></span>
            </a>
            <a href=""></a>
          </div>
        </header>
      </div>
      <div id="hero" class="container-fluid">
        <div class="container">
          <div class="row" id="hero-infos">
            <div class="col-6"></div>
            <div id="age" class="col-6">
              <div class="box"></div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      //LIST ITENS// */}

      <div class="main-content">
        <section>
          <div class="container">
            <div class="row">
              <div class="col-12">
                {loading ? (
                  ""
                ) : (
                  <img
                    src={require("../../assets/images/Comics.png")}
                    alt=""
                    id="comics_logo"
                    class="img-fluid"
                    data-toggle="modal"
                    data-target="#movie-modal"
                    style={{
                      width: 140,
                      heigth: 140,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div class="col-12">
            <div className="row"></div>
            <ul class="movie-list">
              {loading ? (
                <Loading />
              ) : (
                comicsData.map((item) => <ComicDetails data={item} />)
              )}
            </ul>
          </div>
        </section>
      </div>

      {loading ? "" : <Footer />}
    </>
  );
}
