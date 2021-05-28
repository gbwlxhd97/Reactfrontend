# django-backend

## Git Clone & Move Dir

먼저 프로젝트를 clone하고 해당 프로젝트 폴더로 이동합니다.

```
git clone https://github.com/csy1204/djangobackend.git
cd django-backend
```

## Install

필요한 패키지를 설치해줍니다.

```
(optional) pip install django
pip install djangorestframework
pip install django-cors-headers
```

## Run

DB 마이그레이션을 한 후 서버를 켭니다.

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## API명세

| URL             | METHOD   | Description                | Params                | Return      |
| --------------- | -------- | -------------------------- | --------------------- | ----------- |
| /api/posts      | `GET`    | 전체 글을 조회합니다.      |                       | [...{Post}] |
| /api/posts      | `POST`   | 새로운 글을 작성합니다.    | {title:'',content:''} | {Post}      |
| /api/posts/[id] | `GET`    | 특정 id의 글을 조회합니다. |                       | {Post}      |
| /api/posts/[id] | `DELETE` | 특정 id의 글을 삭제합니다. |                       |             |

### react를 이용한 프론트엔드 구축

### django를 이용한 백엔드 rest api이용

### 백엔드 폴더는 멋쟁이사자처럼 react 수업에서 사용된 파일임.

![대나무숲](https://user-images.githubusercontent.com/49021925/120006883-4ede4300-c014-11eb-8cf7-5eee61b0fc2a.PNG)
