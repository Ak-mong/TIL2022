members=['eoging','duru']
for member in members:
    print('멤버',member)

members2 = [
    ['egoing','seoul','programer'],
    ['duru','daege','dba']
]
print(members2[0][1])

for member in members2:
    print(member[0], member[1])

egoing1 = ['egoing','seoul','programer']
egoing2={'name':'egoing', 'city': 'seoul', 'job': 'programmer'} #사전형
print(egoing2['city'])
for name in egoing2:
    print(egoing2[name])

members3=[
    {'name':'egoing','city':'seoul','job':'programmer'},
    {'name':'duru', 'city':'daegu','jog':'dba'}
] #리스트문
for member in members3:
    print(member)
for member in members3:
    print(member['name'])