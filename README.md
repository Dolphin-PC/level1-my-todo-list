# 2024 이노베이션 캠프 | React 주특기 과제 Level 1

## 🌐 Vercel배포 - https://level1-my-todo-list.vercel.app

## ✅ Why: 과제 제출시에는 아래 질문의 답변과 함께 제출해주세요.

### 1. **JSX 문법**이란 무엇일까요?

- html과 js를 하나의 파일에서 작성할 수 있도록 한 React만의 파일확장자

### 2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?

- useState함수

### 3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?

- props전달

### 4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.

> 불변성 : React에서 state나 props를 업데이트할 떄, 기존 데이터를 직접 수정하는 것이 아닌 새로운 데이터를 생성하여 업데이트

- Todo List 추가/삭제
  - `todos`의 배열에 값을 추가하고, 렌더링이 되기 위해서는 `setTodos`라는 setter함수를 통해 새로운 `TODO`를 추가해야 했습니다.
  - 기존의 `todos`에서 특정 `TODO`를 제거하기 위해, `filter함수`와 `setTodos`를 활용했습니다.

### 5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**

- TodoCard 분리

  1.  코드 재사용성 증가
  2.  useCallback-React.memo를 활용한 리렌더링 방지
      - 부모 컴포넌트의 `todos` state가 변경되면, 자식 컴포넌트인 `TodoCard`가 리렌더링 되었습니다.
      - 이를 방지하고자, TodoCard에 전달되는 `onToggleTodo, onDeleteTodo`함수를 `useCallback`으로 메모이제이션하고, `React.memo(TodoCard)`로 했습니다.

- TodoForm 분리
  1.  코드 관심사 분리
      - MainPage의 로직과 Form의 로직을 분리하여, 코드의 가독성을 높였습니다.
  2.  리렌더링 최소화
      - input 입력마다, state의 변경으로 인해 MainPage가 리렌더링 되었습니다.
      - 이를 방지하고자, TodoForm으로 input관련 코드를 자식 컴포넌트로 분리하였고, 부모 컴포넌트의 리렌더링을 최소화했습니다.

## 프로젝트 환경

- ⚙️ React, Vite, yarn
- 🔮Tailwind, styled-component

```
// 프로젝트 시작
yarn
yarn start
```
