import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";
import "bootstrap/dist/css/bootstrap.min.css";

import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";

const Listado = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const ObtenerTodos = async () => {
      const allPokemons = await getPokemons();
      setPokemons(allPokemons);
    };
    ObtenerTodos();
  });

  const filtrarpokemon = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <>
      <div className="text-center">
        <h1>Pokemon</h1>
        <header>
          <input
            style={{ marginBottom: "15px" }}
            value={query}
            placeholder="Tìm kiếm pokemon..."
            onChange={(event) => setQuery(event.target.value.trim())}
            type="text"
          />
        </header>
      </div>

      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">
            {filtrarpokemon?.slice(0, 151).map((pokemon) => (
              <Card className="mx-auto" style={{ width: "18rem" }}>
                <Card.Header>
                  <b>Hệ:</b> {pokemon.type}
                </Card.Header>
                <Card.Img
                  width="80"
                  height="100"
                  variant="top"
                  src={pokemon.imggif}
                  className="d-block mx-auto w-50"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {pokemon.id} - {pokemon.name}
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                      />
                      <b> Máu :</b> {pokemon.hp}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        alt="10x10"
                        src="https://cdn-icons-png.flaticon.com/512/3522/3522092.png"
                      />
                      <b> Tấn công :</b> {pokemon.attack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        alt="10x10"
                        src="https://cdn-icons-png.flaticon.com/512/929/929429.png"
                      />
                      <b> Phòng thủ:</b> {pokemon.defense}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        alt="10x10"
                        src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                      />
                      <b> Tấn công đặc biệt :</b> {pokemon.sp_atk}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        alt="10x10"
                        src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                      />
                      <b> Phòng thủ đặc biệt :</b> {pokemon.sp_def}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        alt="10x10"
                        src="https://cdn-icons-png.flaticon.com/512/8853/8853763.png"
                      />
                      <b> Tốc độ :</b> {pokemon.speed}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listado;
