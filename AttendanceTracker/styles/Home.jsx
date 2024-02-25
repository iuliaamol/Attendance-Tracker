import css from 'styled-jsx/css'

export default css`
  .container {
    padding: 0 2rem;
  }

  .main {
    min-height: 100vh;
    padding: 2rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin: 30;
    line-height: 3;
    font-size: 2rem;
    align-self: center;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
  }
`
