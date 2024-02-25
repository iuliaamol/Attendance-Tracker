import css from 'styled-jsx/css'

export default css`
  .button {
    margin: 30px;
    padding: 32px 16px;
  }

  .button:hover {
    border-color: #111;
  }

  .present {
    background-color: green;
    color: white;
  }

  .absent {
    background-color: red;
    color: white;
  }
  .postpone {
  }

  .tab {
    display: none;
  }

  .tab.active {
    display: block;
  }

  .tabs {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
    border: 3px solid #5e5353;
    border-radius: 10px;
    max-width: 500px;
  }

  .tab-buttons {
    display: flex;
    height: 48px;
  }

  .tab-item {
    flex: 1;
  }

  .tab-content {
    background: #dfdfdf;
    flex: 1;
  }

  .active {
    color: green;
  }
`
