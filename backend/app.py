import os
import re
from flask import Flask, render_template, request, url_for, redirect, jsonify
from email.policy import default
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy
from sqlalchemy.sql import func
from flask_marshmallow import Marshmallow


basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'banco.db')
app.config['SQLALCHEMY_TRACK_MODIFICARIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    

    def __init__(self, title, body):
        self.title = title
        self.body = body

class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id','title','body')

article_schema = ArticleSchema()

articles_schema = ArticleSchema(many=True)





@app.route("/get",methods = ['GET'])
def get_articles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)

@app.route("/get/<id>",methods = ['GET'])
def post_details(id):
    article = Articles.query.get(id)
    return article_schema.jsonify(article)





@app.route("/add",methods = ['POST'])
def add_articles():
    title = request.json['title']
    body  = request.json['body']

    articles = Articles(title, body)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)

@app.route("/update/<id>",methods = ['PUT'])
def update_article(id):
    article = Articles.query.get(id)

    title = request.json['title']
    body  = request.json['body']

    article.title = title
    article.body = body

    db.session.commit()
    return article_schema.jsonify(article)

@app.route("/delete/<id>",methods = ['DELETE'])
def article_delete(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    
    db.session.commit()
    return article_schema.jsonify(article)



if __name__ == "__main__":
    app.run(host = '179.185.162.53',port=3000,debug=True)