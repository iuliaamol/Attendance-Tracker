import css from 'styled-jsx/css'

export default css`
  .card {
    margin: 3rem;
    padding: 70px 70px;
    text-align: center;
    color: inherit;
    text-decoration: none;
    border: 3px solid #5e5353;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 500px;
  }

  .row {
    display: flex;
  }
  .space-betweem {
    justify-content: space-between;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .pressence-buttons {
    justify-content: space-between;
    display: flex;
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

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`
