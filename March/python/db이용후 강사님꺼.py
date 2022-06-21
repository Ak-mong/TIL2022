from flask import Flask, request, redirect
import sqlite3

app = Flask(__name__)

topics = [
  {"id":1, "title":"html", "body":"html is ...."},
  {"id":2, "title":"css", "body":"css is ...."},
  {"id":3, "title":"js", "body":"js is ...."}
]

def template(content, id=None):
  contextUI = ''
  if id != None:
    contextUI = '<input type="submit" value="delete" class="btn btn-dark">'
  conn = sqlite3.connect('db.sqlite3')
  cs = conn.cursor()
  cs.execute('SELECT * FROM topics')
  topics = cs.fetchall()
  conn.close()
  liTags = ''
  for topic in topics:
    liTags = liTags + f'<li><a href="/read/{topic[0]}/">{topic[1]}</a></li>'
  return f'''
  <html>
    <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <style>
        h1{{
          border-bottom:10px solid green;
        }}
        h1>a{{
          text-decoration:none;
        }}
      </style>
    </head>
    <body class="container">
      <input type="button" value="night" onclick="
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
      ">
      <h1><a href="/">WEB</a></h1>
      <ol>
        {liTags}
      </ol>
      {content}
      <form action="/delete/{id}/" method="POST">
        <div class="btn-group" role="group" aria-label="Basic example">  
          <a href="/create/" class="btn btn-dark">create</a>
          {contextUI}
        </div>
      </form>
      
    </body>
  </html>
  '''

@app.route("/")
def index():
  return template('<h2>Welcome</h2>Hello, WEB!')

@app.route("/read/<int:id>/")
def read(id):
  conn = sqlite3.connect('db.sqlite3')
  cs = conn.cursor()
  cs.execute('SELECT * FROM topics WHERE id=?', (id,))
  topic = cs.fetchone()
  conn.close()
  title = topic[1]
  body = topic[2]
  return template(f'<h2>{title}</h2>{body}', id)

@app.route('/create/')
def create():
  content = '''
    <form action="/create_process/" method="POST">
      <p><input type="text" name="title" placeholder="title"></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="create"></p>
    </form>
  '''
  return template(content)

@app.route('/create_process/', methods=['POST'])
def create_process():
  title = request.form['title']
  body = request.form['body']
  conn = sqlite3.connect('db.sqlite3')
  cs = conn.cursor()
  cs.execute('INSERT INTO topics (title, body) VALUES(?,?)',(title,body))
  id = cs.lastrowid
  conn.commit()
  conn.close()
  return redirect(f'/read/{id}/')


@app.route('/delete/<int:id>/', methods=['POST'])
def delete(id):
  
  conn = sqlite3.connect('db.sqlite3')
  cs = conn.cursor()
  cs.execute('DELETE FROM topics WHERE id = ?',(id,))
  conn.commit()
  conn.close()
  
  return redirect('/')
 
# # @app.route('/update/')
# # def update():
# #   return 'Update'
 

app.run()

