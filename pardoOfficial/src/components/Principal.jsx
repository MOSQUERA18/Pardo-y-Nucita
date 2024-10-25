

function Principal(){
    return(
        <>
    <div className="menu-btn">
      <a href="">
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </i>
      </a>
    </div>




    <div className="container">
      <nav className="nav-main">
        <img src="IMG/brand.png" alt="" className="nav-brand" />

        <ul className="nav-menu">
          <li>
            <a href="#">Acerca de Nosotros</a>
          </li>

          <li>
            <a href="#" >Pardo</a> {' '}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16" >
  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
</svg>
          </li>

          <li>
            <a href="#">Nucita</a>
          </li>

          <li>
            <a href="#">Machine learning</a>
          </li>

          <li>
            <a href="#">Quantum computing</a>
          </li>
          <li>
            <a href="#">StartUp</a>
          </li>
          <li>
            <a href="#">Mas</a>
          </li>
        </ul>

        {/* <ul className="nav-menu-right">
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
              </svg>
            </a>
          </li>
        </ul> */}
      </nav>

      <hr />

      <header className="showcase">
        <h2>BIG NEWS TODAY</h2>
        <p>
          Lorem ipsum dlor sit amet consectetur adipisicing elit. Sequi
          recusandae voluptatum excepturi ipsa soluta necessitatibus autem
          expedita tempora et cumque eaque, eligendi atque impedit esse
          asperiores! Aut temporibus ullam numquam!
        </p>

        <a href="" className="btn"
          >Aprender Mas
          <i
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              /></svg></i
        ></a>
      </header>

      <div className="news-card">
        <div>
          <img src="./IMG/news1.jpg" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            consectetur alias omnis laboriosam aliquam optio dignissimos nemo
            soluta dolores ex facere officiis quae sequi exercitationem vero
            commodi maiores, voluptatum deserunt.
          </p>

          <a href=""
            >Aprender Mas
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>

        <div>
          <img src="./IMG/news2.jpg" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            consectetur alias omnis laboriosam aliquam optio dignissimos nemo
            soluta dolores ex facere officiis quae sequi exercitationem vero
            commodi maiores, voluptatum deserunt.
          </p>

          <a href=""
            >Aprender Mas
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>

        <div>
          <img src="./IMG/news3.jpg" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            consectetur alias omnis laboriosam aliquam optio dignissimos nemo
            soluta dolores ex facere officiis quae sequi exercitationem vero
            commodi maiores, voluptatum deserunt.
          </p>

          <a href=""
            >Aprender Mas
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>

        <div>
          <img src="./IMG/news4.jpg" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            consectetur alias omnis laboriosam aliquam optio dignissimos nemo
            soluta dolores ex facere officiis quae sequi exercitationem vero
            commodi maiores, voluptatum deserunt.
          </p>

          <a href=""
            >Aprender Mas
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>
      </div>

      <section className="cards-banner-one">
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            dicta ab veritatis! Ratione explicabo consectetur dicta ipsa
            consequatur! Reprehenderit assumenda sunt magnam nesciunt alias at
            ipsum illum iusto sit aperiam.
          </p>

          <a href="#" className="btn">
            Learn More
            <i
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>
      </section>

      <div className="news-card">
        <div>
          <img src="./IMG/news1.jpg" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            consectetur alias omnis laboriosam aliquam optio dignissimos nemo
            soluta dolores ex facere officiis quae sequi exercitationem vero
            commodi maiores, voluptatum deserunt.
          </p>

          <a href=""
            >Aprender Mas
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>

        <div>
          <img src="./IMG/news2.jpg" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            consectetur alias omnis laboriosam aliquam optio dignissimos nemo
            soluta dolores ex facere officiis quae sequi exercitationem vero
            commodi maiores, voluptatum deserunt.
          </p>

          <a href=""
            >Aprender Mas
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>

        <div>
          <img src="./IMG/news3.jpg" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            consectetur alias omnis laboriosam aliquam optio dignissimos nemo
            soluta dolores ex facere officiis quae sequi exercitationem vero
            commodi maiores, voluptatum deserunt.
          </p>

          <a href=""
            >Aprender Mas
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>

        <div>
          <img src="./IMG/news4.jpg" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            consectetur alias omnis laboriosam aliquam optio dignissimos nemo
            soluta dolores ex facere officiis quae sequi exercitationem vero
            commodi maiores, voluptatum deserunt.
          </p>

          <a href=""
            >Aprender Mas
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>
      </div>

      {/* <section className="cards-banner-two">
        <div className="contaer">
          <h2>Lorem, ipsum dolor.</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam
            esse dicta fugit, et asperiores aperiam eligendi ab ex, odit sed
            eaque cupiditate sequi vitae eius totam. Repudiandae, commodi
            laborum?
          </p>

          <a href="#">
            <i
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                /></svg></i
          ></a>
        </div>
      </section> */}

      <section className="social">
        <p>Siguenos en nuestra Pagina de Pardo y Nucita</p>
        <div className="links">
          <a href="#"
            ><i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                />
              </svg> </i
          ></a>

          <a href=""
            ><i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                />
              </svg> </i
          ></a>
        </div>
      </section>
    </div>


        </>
    )
}

export default Principal;