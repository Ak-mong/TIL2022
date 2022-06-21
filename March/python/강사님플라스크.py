@app.route('/create_process/', methods=['POST'])
def create_process():
  global nextId
  title = request.form['title']
  body = request.form['body']
  newTopic = {"id":nextId, "title": title, "body": body}
  topics.append(newTopic)
  nextId = nextId + 1
  return redirect(f'/read/{nextId-1}/')


# @app.route('/update/')
# def update():
#   return 'Update'


app.run()