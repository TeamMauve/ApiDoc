define({ "api": [
  {
    "type": "GET",
    "url": "/auth/refresh",
    "title": "JWT Refresh 토큰 발급",
    "name": "JWT_Refresh_토큰_발급",
    "description": "<p>JWT Refresh 토큰 발급하는 api입니다.</p>",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "GET-refresh"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>학생 ID</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>사용자 JWT access token key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Refresh",
            "description": "<p>사용자 JWT refresh token key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X GET /auth/refresh\\\n     -H \"Authorization: Bearer thisisjwtaccesstoken\"\\\n     -H \"Refresh: Bearer thisisjwtrefreshtoken\"\\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/auth/refresh',\n     headers: { 'Authorization': 'Bearer thisisjwtaccesstoken', \"Refresh\" : \"thisisjwtrefreshtoken\" }\n  });\n  console.log('refresh :', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "statusCode",
            "description": "<p>상태코드</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response body</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>accessToken</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>refreshToken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "created success",
          "content": "HTTP/1.1 201 OK\n{\n    \"statusCode\": 201,\n    \"body\": {\n        \"accessToken\" : \"thisisnewjwtaccesstoken\"\n        \"refreshToken\": \"thisisnewjwtrefreshtoken\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/auth.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "401",
            "description": "<p>access token이 만료되지 않은경우</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>디코딩 결과가 없음 OR 사용자 없음 OR 토큰이 헤더에 없는 경우</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/auth/withdrawal",
    "title": "사용자 탈퇴",
    "name": "사용자_탈퇴",
    "description": "<p>사용자가 튜닝 서비스를 탈퇴하는 api입니다. <strong>현재 사용자 탈퇴 API는 구조만 잡혀 있고 제대로 실행되지 않습니다. 사용자와 관련된 모든 테이블 구현과 API가 구현되고 개발을 완료할 예정입니다.</strong></p>",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "GET-refresh"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>사용자 JWT access token key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Refresh",
            "description": "<p>사용자 JWT refresh token key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X DELETE /auth/withdrawal\\\n     -H \"Authorization: Bearer thisisjwtaccesstoken\"\\\n     -H \"Refresh: Bearer thisisjwtrefreshtoken\"\\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'DELETE',\n     url: '/auth/withdrawal',\n     headers: { 'Authorization': 'Bearer thisisjwtaccesstoken', \"Refresh\" : \"thisisjwtrefreshtoken\" }\n  });\n  console.log('refresh :', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "delete success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/auth.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "401",
            "description": "<p>access token이 만료되지 않은경우</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>디코딩 결과가 없음 OR 사용자 없음 OR 토큰이 헤더에 없는 경우</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/auth/login",
    "title": "회원가입 및 로그인",
    "name": "회원가입_및_로그인",
    "description": "<p>회원가입 및 로그인 api입니다. 튜닝 서비스는 카카오톡 소셜 로그인만을 지원하기 때문에, 로그인과 회원가입을 따로 분리하지 않습니다. 따라서, 서버에서는 사용자가 신규 생성 되었으면 response 값에 created라는 키를 통해 사용자가 새로 생성되었는지를 확인할 수 있습니다.</p>",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "POST-login"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phone_NO",
            "description": "<p>사용자 핸드폰 번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "kakao_token",
            "description": "<p>사용자 카카오 계정 토큰</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "profile_img",
            "description": "<p>카카오 계정 프로필 이미지</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /auth/login \\\n     -d '{\"phone_NO\":\"01012345678\", \"kakao_token\":\"thisiskakaotokenvalue\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/auth/login',\n     data: {\n       'phone_NO': '01012345678',\n       'kakao_token': 'thisiskakaotokenvalue'\n     }\n  });\n  console.log('User login: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "created",
            "description": "<p>사용자 신규 생성 여부 (신규 생성 여부에 따라 statuscode로 달라집니다. 신규 생성일 경우 201, 아닐 경우 200을 응답합니다.)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>사용자 JWT access token</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>사용자 JWT refresh token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "created success",
          "content": "HTTP/1.1 201 OK\n{\n  \"created\": true,\n  \"accessToken\": \"thisisaccessTokenvalue\",\n  \"refreshToken\": \"thisisrefreshTokenvalue\",\n}",
          "type": "json"
        },
        {
          "title": "login success",
          "content": "HTTP/1.1 200 OK\n{\n  \"created\": false,\n  \"accessToken\": \"thisisaccessTokenvalue\",\n  \"refreshToken\": \"thisisrefreshTokenvalue\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "GET",
    "url": "parent/child?id={id}",
    "title": "사용자 자녀 개별 정보 조회",
    "name": "사용자_자녀_개별_정보_조회",
    "description": "<p>사용자의 자녀 각각의 정보를 조회하는 api입니다.</p>",
    "group": "Parent_[Student]",
    "version": "1.0.0",
    "permission": [
      {
        "name": "GET-child"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>학생 ID</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>사용자 JWT access token key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Refresh",
            "description": "<p>사용자 JWT refresh token key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X PUT /child?id=a66b38e0-eb83-11eb-a2ca-274661d6d1ff\\\n     -H \"Authorization: Bearer thisisjwtaccesstoken\"\\\n     -H \"Refresh: Bearer thisisjwtrefreshtoken\"\\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/parent/child?id=a66b38e0-eb83-11eb-a2ca-274661d6d1ff',\n     headers: { 'Authorization': 'Bearer thisisjwtaccesstoken', \"Refresh\" : \"thisisjwtrefreshtoken\" }\n  });\n  console.log('User child: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "statusCode",
            "description": "<p>상태코드</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response body</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[ID]",
            "description": "<p>자녀 ID</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[name]",
            "description": "<p>자녀 이름</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "body[age]",
            "description": "<p>자녀 나이</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[gender]",
            "description": "<p>자녀 성별</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[phone_NO]",
            "description": "<p>자녀 핸드폰 번호</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[full_address]",
            "description": "<p>학생 주소지</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "body[has_instrument]",
            "description": "<p>학생 악기 보유 여부</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "body[has_lesson_experience]",
            "description": "<p>학생 레슨 경험 여부</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "body[can_read_score]",
            "description": "<p>학생 악보 해석 가능 여부</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[created_At]",
            "description": "<p>학생 추가 일자</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[updated_At]",
            "description": "<p>학생 수정 일자</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "created success",
          "content": "HTTP/1.1 201 OK\n{\n    \"statusCode\": 201,\n    \"body\": {\n        \"ID\": \"255c42c0-ede1-11eb-85e6-1d0abc89eafc\",\n        \"name\": \"정지원\",\n        \"age\": 20,\n        \"gender\": \"M\",\n        \"phone_NO\": \"01051849798\",\n        \"has_instrument\": true,\n        \"full_address\": \"경기도 성남시 분당구 삼평동\",\n        \"has_lesson_experience\": true,\n        \"can_read_score\": true,\n        \"createdAt\": \"2021-07-26 16:14:41\",\n        \"updatedAt\": \"2021-07-26 16:14:41\",\n        \"deletedAt\": null,\n        \"parent_ID\": \"32a65940-eb91-11eb-94eb-1bd36ef54096\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "409",
            "description": "<p>Role Error response</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "401",
            "description": "<p>access token이 만료되지 않은경우</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>디코딩 결과가 없음 OR 사용자 없음 OR 토큰이 헤더에 없는 경우</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "409 Error",
          "content": "HTTP/1.1 409 Conflict\n{\n  message: \"자녀 정보를 조회할 수 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/parent.js",
    "groupTitle": "Parent_[Student]"
  },
  {
    "type": "POST",
    "url": "/parent/child",
    "title": "사용자 자녀 등록",
    "name": "사용자_자녀_등록",
    "description": "<p>사용자의 자녀를 등록하는 api입니다.</p>",
    "group": "Parent_[Student]",
    "version": "1.0.0",
    "permission": [
      {
        "name": "POST-child"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>사용자 JWT access token key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Refresh",
            "description": "<p>사용자 JWT refresh token key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "age",
            "description": "<p>학생 나이</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>학생 이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "phone_NO",
            "description": "<p>학생 핸드폰 번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_address",
            "description": "<p>학생 주소지</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "has_instrument",
            "description": "<p>학생 악기 보유 여부</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "has_lesson_experience",
            "description": "<p>학생 레슨 경험 여부</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "can_read_score",
            "description": "<p>학생 악보 해석 가능 여부</p>"
          },
          {
            "group": "Body",
            "type": "List[Integer]",
            "optional": false,
            "field": "hope_instrument",
            "description": "<p>학생이 배우고픈 악기 목록</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /parent/child \\\n      -H \"Authorization: Bearer thisisjwtaccesstoken\"\\\n     -H \"Refresh: Bearer thisisjwtrefreshtoken\"\\\n     -d '{\"age\" : 20,\"name\": \"정지원\",\"gender\" : \"M\",\"phone_NO\" : \"01051849798\",\"has_instrument\": true,\"full_address\": \"경기도 성남시 분당구 삼평동\",\"has_lesson_experience\": true,\"can_read_score\": true}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/parent/child',\n     headers: { 'Authorization': 'Bearer thisisjwtaccesstoken', \"Refresh\" : \"thisisjwtrefreshtoken\" }\n     data: {\n              \"age\" : 20,\n              \"name\": \"정지원\",\n              \"gender\" : \"M\",\n              \"phone_NO\" : \"01051849798\",\n              \"has_instrument\": true,\n              \"full_address\": \"경기도 성남시 분당구 삼평동\",\n              \"has_lesson_experience\": true,\n              \"can_read_score\": true\n          }\n  });\n  console.log('User child: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "created",
            "description": "<p>사용자 신규 생성 여부 (신규 생성 여부에 따라 statuscode가 달라집니다. 신규 생성일 경우 201, 아닐 경우 200을 응답합니다.)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>사용자 JWT access token</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>사용자 JWT refresh token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "created success",
          "content": "HTTP/1.1 201 OK\n{\n\"statusCode\": 201,\n\"body\": {\n    created: true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "400",
            "description": "<p>Request Body Error response</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "409",
            "description": "<p>Role Error response</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "401",
            "description": "<p>access token이 만료되지 않은경우</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>디코딩 결과가 없음 OR 사용자 없음 OR 토큰이 헤더에 없는 경우</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Error",
          "content": "HTTP/1.1 400 Conflict\n{\n  message: `${typeof childDTO}는 유효하지 않는 데이터 형태입니다.`\n}",
          "type": "json"
        },
        {
          "title": "409 Error",
          "content": "HTTP/1.1 409 Conflict\n{\n  message: \"사용자의 역할로는 자녀를 등록할 수 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/parent.js",
    "groupTitle": "Parent_[Student]"
  },
  {
    "type": "GET",
    "url": "/parent/children",
    "title": "사용자 자녀 전체 조회",
    "name": "사용자_자녀_전체_조회",
    "description": "<p>사용자의 자녀 전체를 조회하는 api입니다.</p>",
    "group": "Parent_[Student]",
    "version": "1.0.0",
    "permission": [
      {
        "name": "GET-children"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>사용자 JWT access token key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Refresh",
            "description": "<p>사용자 JWT refresh token key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X PUT parent/children\\\n     -H \"Authorization: Bearer thisisjwtaccesstoken\"\\\n     -H \"Refresh: Bearer thisisjwtrefreshtoken\"\\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: 'parent/children',\n     headers: { 'Authorization': 'Bearer thisisjwtaccesstoken', \"Refresh\" : \"thisisjwtrefreshtoken\" }\n  });\n  console.log('User children: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "statusCode",
            "description": "<p>상태코드</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "allowedValues": [
              "list"
            ],
            "optional": false,
            "field": "body",
            "description": "<p>Response body</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[ID]",
            "description": "<p>자녀 ID</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[name]",
            "description": "<p>자녀 이름</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "body[age]",
            "description": "<p>자녀 나이</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[gender]",
            "description": "<p>자녀 성별</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[phone_NO]",
            "description": "<p>자녀 핸드폰 번호</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[full_address]",
            "description": "<p>학생 주소지</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "body[has_instrument]",
            "description": "<p>학생 악기 보유 여부</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "body[has_lesson_experience]",
            "description": "<p>학생 레슨 경험 여부</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "body[can_read_score]",
            "description": "<p>학생 악보 해석 가능 여부</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[created_At]",
            "description": "<p>학생 추가 일자</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body[updated_At]",
            "description": "<p>학생 수정 일자</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "created success",
          "content": "HTTP/1.1 201 OK\n{\n    \"statusCode\": 201,\n    \"body\": [{\n        \"ID\": \"255c42c0-ede1-11eb-85e6-1d0abc89eafc\",\n        \"name\": \"정지원\",\n        \"age\": 20,\n        \"gender\": \"M\",\n        \"phone_NO\": \"01051849798\",\n        \"has_instrument\": true,\n        \"full_address\": \"경기도 성남시 분당구 삼평동\",\n        \"has_lesson_experience\": true,\n        \"can_read_score\": true,\n        \"createdAt\": \"2021-07-26 16:14:41\",\n        \"updatedAt\": \"2021-07-26 16:14:41\",\n        \"deletedAt\": null,\n        \"parent_ID\": \"32a65940-eb91-11eb-94eb-1bd36ef54096\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "409",
            "description": "<p>Role Error response</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "401",
            "description": "<p>access token이 만료되지 않은경우</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>디코딩 결과가 없음 OR 사용자 없음 OR 토큰이 헤더에 없는 경우</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "409 Error",
          "content": "HTTP/1.1 409 Conflict\n{\n  message: \"자녀 정보를 조회할 수 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/parent.js",
    "groupTitle": "Parent_[Student]"
  },
  {
    "type": "DELETE",
    "url": "/parent/child",
    "title": "사용자 자녀 삭제",
    "name": "사용자_자녀_정보_삭제",
    "description": "<p>사용자의 자녀 정보를 삭제하는 api입니다.</p>",
    "group": "Parent_[Student]",
    "version": "1.0.0",
    "permission": [
      {
        "name": "DELETE-child"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>학생 ID</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>사용자 JWT access token key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Refresh",
            "description": "<p>사용자 JWT refresh token key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X DELETE parent/child?id=a66b38e0-eb83-11eb-a2ca-274661d6d1ff\\\n     -H \"Authorization: Bearer thisisjwtaccesstoken\"\\\n     -H \"Refresh: Bearer thisisjwtrefreshtoken\"\\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'DELETE',\n     headers: { 'Authorization': 'Bearer thisisjwtaccesstoken', \"Refresh\" : \"thisisjwtrefreshtoken\" }\n     url: '/parent/child?id=a66b38e0-eb83-11eb-a2ca-274661d6d1ff',\n  });\n  console.log('User Child deleted: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "statusCode",
            "description": "<p>상태코드</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response body</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "body[created]",
            "description": "<p>자녀 정보 삭제 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "created success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "409",
            "description": "<p>Role Error response</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "401",
            "description": "<p>access token이 만료되지 않은경우</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>디코딩 결과가 없음 OR 사용자 없음 OR 토큰이 헤더에 없는 경우</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "409 Error",
          "content": "HTTP/1.1 409 Conflict\n{\n  message: \"사용자의 역할로는 자녀 정보를 삭제할 수 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "409 Error",
          "content": "HTTP/1.1 409 Conflict\n{\n  message: \"자녀 정보를 조회할 수 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/parent.js",
    "groupTitle": "Parent_[Student]"
  },
  {
    "type": "PUT",
    "url": "/parent/child",
    "title": "사용자 자녀 정보 수정",
    "name": "사용자_자녀_정보_수정",
    "description": "<p>사용자의 자녀 정보를 수정하는 api입니다.</p>",
    "group": "Parent_[Student]",
    "version": "1.0.0",
    "permission": [
      {
        "name": "PUT-child"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>학생 ID</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Integer",
            "optional": true,
            "field": "age",
            "description": "<p>학생 나이</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>학생 이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "phone_NO",
            "description": "<p>학생 핸드폰 번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "full_address",
            "description": "<p>학생 주소지</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "has_instrument",
            "description": "<p>학생 악기 보유 여부</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "has_lesson_experience",
            "description": "<p>학생 레슨 경험 여부</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "can_read_score",
            "description": "<p>학생 악보 해석 가능 여부</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>사용자 JWT access token key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Refresh",
            "description": "<p>사용자 JWT refresh token key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X PUT parent/child?id=a66b38e0-eb83-11eb-a2ca-274661d6d1ff\\\n     -H \"Authorization: Bearer thisisjwtaccesstoken\"\\\n     -H \"Refresh: Bearer thisisjwtrefreshtoken\"\\\n     -d '{\"age\" : 21}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'PUT',\n     headers: { 'Authorization': 'Bearer thisisjwtaccesstoken', \"Refresh\" : \"thisisjwtrefreshtoken\" }\n     url: '/parent/child?id=a66b38e0-eb83-11eb-a2ca-274661d6d1ff',\n     data: {\n              \"age\" : 21,\n          }\n  });\n  console.log('User child: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "statusCode",
            "description": "<p>상태코드</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response body</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "body[created]",
            "description": "<p>자녀 정보 수정 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "created success",
          "content": "HTTP/1.1 201 OK\n{\n\"statusCode\": 201,\n\"body\": {\n    updated: true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "400",
            "description": "<p>Request Body Error response</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "409",
            "description": "<p>Role Error response</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "401",
            "description": "<p>access token이 만료되지 않은경우</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>디코딩 결과가 없음 OR 사용자 없음 OR 토큰이 헤더에 없는 경우</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Error",
          "content": "HTTP/1.1 400 Conflict\n{\n  message: `${typeof childDTO}는 유효하지 않는 데이터 형태입니다.`\n}",
          "type": "json"
        },
        {
          "title": "409 Error",
          "content": "HTTP/1.1 409 Conflict\n{\n  message: \"사용자의 역할로는 자녀를 등록할 수 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/parent.js",
    "groupTitle": "Parent_[Student]"
  },
  {
    "type": "POST",
    "url": "/user/role",
    "title": "사용자 역할 설정",
    "name": "사용자_및_선생님_역할_설정",
    "description": "<p>사용자의 역할을 설정하는 api입니다.</p>",
    "permission": [
      {
        "name": "POST-role"
      }
    ],
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>사용자 JWT access token key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Refresh",
            "description": "<p>사용자 JWT refresh token key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"parent\"",
              "\"teacher\""
            ],
            "optional": false,
            "field": "role",
            "description": "<p>사용자가 설정한 역할</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>사용자가 설정한 역할별 데이터</p>"
          }
        ],
        "parent": [
          {
            "group": "parent",
            "type": "String",
            "optional": false,
            "field": "data[nickname]",
            "description": "<p>학부모 닉네임</p>"
          }
        ],
        "teacher": [
          {
            "group": "teacher",
            "type": "String",
            "optional": false,
            "field": "data[name]",
            "description": "<p>선생님 실명</p>"
          },
          {
            "group": "teacher",
            "type": "String",
            "allowedValues": [
              "\"M\"",
              "\"F\"",
              "\"N\""
            ],
            "optional": true,
            "field": "data[gender]",
            "description": "<p>선생님 실명</p>"
          },
          {
            "group": "teacher",
            "type": "String",
            "optional": true,
            "field": "data[birthday]",
            "description": "<p>선생님 생년월일</p>"
          },
          {
            "group": "teacher",
            "type": "String",
            "optional": true,
            "field": "data[introduction]",
            "description": "<p>선생님 소개글</p>"
          },
          {
            "group": "teacher",
            "type": "Boolean",
            "optional": true,
            "field": "data[can_rental]",
            "description": "<p>선생님 악기 대여 가능 여부</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /user/role \\\n     -H \"Authorization: Bearer thisisjwtaccesstoken\"\\\n     -H \"Refresh: Bearer thisisjwtrefreshtoken\"\\\n     -d '{\"role\":\"parent\", \"data\" : {\"nickname\" : \"jiwon11\"}}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/user/role',\n     headers: { 'Authorization': 'Bearer thisisjwtaccesstoken', \"Refresh\" : \"thisisjwtrefreshtoken\" }\n     data: {\n       'role': 'parent',\n       'data': {\n           \"nickname\" : \"jiwon11\"\n         }\n     }\n  });\n  console.log('User role: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>사용자의 role이 반영된 JWT access token</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>사용자의 role이 반영된 JWT refresh token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "successExample",
          "content": "HTTP/1.1 200 OK\n\"statusCode\": 200,\n\"body\": {\n\"accessToken\": \"thisisjwtaccesstoken\",\n\"refreshToken\": \"thisisjwtrefreshtoken\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "401",
            "description": "<p>access token이 만료되지 않은경우</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>디코딩 결과가 없음 OR 사용자 없음 OR 토큰이 헤더에 없는 경우</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/user/",
    "title": "사용자 프로필 수정",
    "name": "사용자_프로필_정보_수정",
    "description": "<p>사용자의 프로필 정보를 수정하는 api입니다.</p>",
    "permission": [
      {
        "name": "PUT-user"
      }
    ],
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>사용자 JWT access token key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Refresh",
            "description": "<p>사용자 JWT refresh token key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "phone_NO",
            "description": "<p>사용자 핸드폰 번호</p>"
          }
        ],
        "parent": [
          {
            "group": "parent",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>학부모 닉네임</p>"
          }
        ],
        "teacher": [
          {
            "group": "teacher",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>선생님 실명</p>"
          },
          {
            "group": "teacher",
            "type": "String",
            "allowedValues": [
              "\"M\"",
              "\"F\"",
              "\"N\""
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>선생님 성별</p>"
          },
          {
            "group": "teacher",
            "type": "String",
            "optional": true,
            "field": "birthday",
            "description": "<p>선생님 생년월일</p>"
          },
          {
            "group": "teacher",
            "type": "String",
            "optional": true,
            "field": "introduction",
            "description": "<p>선생님 소개글</p>"
          },
          {
            "group": "teacher",
            "type": "Boolean",
            "optional": true,
            "field": "can_rental",
            "description": "<p>선생님 악기 대여 가능 여부</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X PUT /user/ \\\n     -H \"Authorization: Bearer thisisjwtaccesstoken\"\\\n     -H \"Refresh: Bearer thisisjwtrefreshtoken\"\\\n     -d '{\"nickname\": \"jiwon111\",\"phone_NO\" : \"10151849798\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'PUT',\n     url: '/user/role',\n     headers: { 'Authorization': 'Bearer thisisjwtaccesstoken', \"Refresh\" : \"thisisjwtrefreshtoken\" }\n     data: {\n       \"phone_NO\": \"10151849798\",\n       \"nickname\": \"jiwon111\"\n     }\n  });\n  console.log('User edit: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "statusCode",
            "description": "<p>상태코드</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Response body</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "body[updated]",
            "description": "<p>사용자 정보 수정 완료 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "successExample",
          "content": "HTTP/1.1 200 OK\n{\n\"statusCode\": 200,\n\"body\": {\n    updated: true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../tuningApp/routes/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "ErrorCode": [
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "401",
            "description": "<p>access token이 만료되지 않은경우</p>"
          },
          {
            "group": "ErrorCode",
            "optional": false,
            "field": "404",
            "description": "<p>디코딩 결과가 없음 OR 사용자 없음 OR 토큰이 헤더에 없는 경우</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 access token이 만료되지 않은경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token이 만료되지 않아 refresh 할 필요가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 디코딩 결과가 없음",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"JWT 토큰에 사용자 정보가 없습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 사용자 없음",
          "content": "HTTP/1.1 404 Conflict\n{\n  message: \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "404 토큰이 헤더에 없는 경우",
          "content": "HTTP/1.1 401 Conflict\n{\n  message: \"access token 또는 refresh token이 Header에 존재하지 않습니다.\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Conflict\n{\n  message: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
