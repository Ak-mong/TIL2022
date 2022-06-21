@app.route('/create_process/', methods=['POST'])
def create_process():
  global nextId
  title = request.form['title']
  body = request.form['body']
  newTopic = {"id":nextId, "title": title, "body": body}
  topics.append(newTopic)    
  nextId = nextId + 1 #nextId는 변수라서 global(전역화)필요, topic은 아님
  return f'success!! go:/read/{nextId-1}/'
 
@app.route('/redirect/')
def a():
  
  return redirect(f'/read/{nextId-1}/') 
              
@app.route('/update/')
def update():
  return 'Update'

app.run()