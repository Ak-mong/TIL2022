print(1)
if True:  #if 구문에서 들여쓰기가 매우 중요하다.
    print(2)
    print(3)
print(4) #if구문에 포함안되는 줄

print(1)
if False:  #if 구문에서 들여쓰기가 매우 중요하다.
    print(2)
    print(3)
print(4) #if구문에 포함안되는 줄

print(1)
if True:
    print(2.1)
    print(3.1)
else:
    print(2.2)
    print(3.2)
print(4)

input_id= input('아이디를 입력해주세요. ')
input_pwd = input('비밀번호를 입력해주세요. ')
if input_id == 'egoing':
    print('HI')
else:
    print('who?')
if input_pwd == 'egoing':
    print('hi')
else:
    print('not yet')