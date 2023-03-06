import { Request, Response } from "express";
import { TARGET_URL } from "../variables";
import * as cheerio from "cheerio";
import axios from "axios";
import * as fs from 'fs';

export const getChapters = ($) => { 
	const chapterLinks = $('p[class*=toc]');
	const chapterList = [];
	chapterLinks.each((i, el) =>
    $(el).find('a').each(function(i, link){chapterList.push($(link).attr('href'))})
  )
  const chapterURLSet = new Set(chapterList);
  // console.log('after push:', new Set(chapterList))
  chapterURLSet.forEach(item => console.log('item:', item));
}

export const chapterScrapper = (req, res) => 
  axios.get(TARGET_URL).then((res: any) => {
    const body = res.data;
    const $ = cheerio.load(body);
    getChapters($);
  });