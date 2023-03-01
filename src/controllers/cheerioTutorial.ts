import { Request, Response } from "express";
import { TARGET_URL } from "../variables";
import cheerio from "cheerio";
import axios from "axios";
import * as fs from 'fs';

// app.get('/book-page/:name', (req, res) => {
//   const { name } = req.params;
//   res.status(200).send(name.toUpperCase());
// });
interface PokemonItem {
  img: string;
  name: string;
}

export const getPokemons = ($) => {
  const pokemons = $('.products');
  console.log('.products.children', pokemons.children)
  // const pokemonData = [];
  // pokemons.each((el: object) => {
  //     const pokemon: PokemonItem = {img: '', name: ''};
  //     pokemon.img = $(el).find('a > img').attr('src');
  //     pokemon.name = $(el).find('h2').text();
  //     pokemonData.push(pokemon)
  // })
  // fs.writeFile("pokemon.json", JSON.stringify(pokemonData, null, 2), (err) => {
  //   if (err) {
  //     console.log('error:', err);
  //     return;
  //   }
  //   console.log('data successfull')
  // })
}

export const pokeTest = () => 
  axios.get(TARGET_URL).then((res: any) => {
    const body = res.data;
    const $ = cheerio.load(body);
    getPokemons($)
  })