import React from "react";

// import { Container } from './styles';

export default function ComicDetails(data) {
  return (
    <>
      {console.log(data.data)}
      <li class="movie">
        <img
          src={`${data.data.thumbnail.path}.${data.data.thumbnail.extension}`}
          alt=""
          class="img-fluid"
          data-toggle="modal"
          data-target="#movie-modal"
        />
        <div class="movie-info">
          <div class="col-12 card-flex">
            <div class="text-truncate">{data.data.title}</div>

            {/* <font class="time">4 Temps</font> */}
            <div class="hd">
              <font>HD</font>
            </div>
          </div>
          <div class="col-12 card-flex">
            <div class="tags">
              <font>R$ {data.data.prices[0].price} </font>
            </div>
          </div>
          <div class="col-12">
            <button type="button" class="btn btn-light">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
