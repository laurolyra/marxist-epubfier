import { Request, Response } from "express";
import { TARGET_URL } from "../variables";
import * as cheerio from "cheerio";
import axios from "axios";
import * as fs from 'fs';

export const getChapters = ($) => { 
	const chapterLinks = $('p.toc');
	const chapterList = [];
	chapterLinks.each((index, el) => {
    // const chapter = $(el).find('a').attr('href');
    const chapter = $(el).find('a').each(function(i, link){chapterList.push($(link).attr('href'))});
    // console.log('chapter:', chapter)
		// chapterList.push(chapter)
	}) 
  console.log('after push:', chapterList)
}

export const chapterScrapper = () => 
  axios.get(TARGET_URL).then((res: any) => {
    const body = res.data;
    const $ = cheerio.load(body);
    getChapters($)
  })