const express = require("express");
const url = require("../models/url");
const user = require("../models/user");
const { setUser, getuser } = require("../services/checkAuth");  
async function handlePostReq(req, res) {

  const { originalUrl } = req.body;

  if (!originalUrl) return res.status(400).send("Please Enter URL");

  const shortId = Math.random().toString(36).substring(2, 8);

  const newurl = await url.create({
    id: shortId,
    url: originalUrl,
    clicks: 0
  });
  res.render("index",{shortUrl:`http://localhost:3000/${shortId}`})
}

async function handleGetrequest(req, res) {
  
  const { id } = req.params;
  
  const entry = await url.findOne({ id :id.trim() });

  if (!entry) return res.status(404).send("URL not found");

  entry.clicks += 1;
  await entry.save();

  const redirectUrl = entry.url.startsWith("http") ? entry.url : `https://${entry.url}`;
  res.redirect(redirectUrl);
}
async function analysis(req,res){

  const { id } = req.params;
  const entry = await url.findOne({ id :id.trim() });
  if (!entry) return res.status(404).send("URL not found");
  res.render("index",{shortUrl:`http://localhost:3000/${entry.id}`,clicks:entry.clicks,createdAt:entry.createdAt});
}


async function handlelogin(req, res) {
 
  const { email, password } = req.body;
  const entry = await user.findOne({ email: email.trim() });
  if (!entry) return res.status(404).render("login", { error: "User not found" }); 
  if (entry.password !== password) return res.status(401).render("login", { error: "Invalid password" });
  const token = setUser({ id: entry._id, email: entry.email });
  res.cookie("auth_uuid", token); 
  res.status(200).render("index", { message: "Login successful" });
} 


async function handleSignup(req, res) {
 
  const { email, password } = req.body;
  const existingUser = await user.findOne({ email: email.trim() });
  if (existingUser) return res.status(400).render("signup", { error: "User already exists" });
  const newUser = await user.create({ email: email.trim(), password,createdBy:newUser._id });
  res.status(201).render("index", { message: "Signup successful" });
}
module.exports = { handleGetrequest, handlePostReq , analysis , handlelogin, handleSignup};