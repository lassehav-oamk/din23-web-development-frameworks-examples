import { useState } from 'react'

interface InvestmentYearData {
  year: number;
  savedTotalValue: number;
  annualReturn: number;
  totalInvestmentValue: number;
}

export default function Ex95InvestmentCalculator() {

  const [investmentData, setInvestmentData] = useState<InvestmentYearData[]>([]);
  /*const investmentData : InvestmentYearData[] = [
    {
      year: 1,
      savedTotalValue: 1200,
      annualReturn: 70,
      totalInvestmentValue: 1270
    }
  ];*/

  function formSubmissionHandler(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const initialInvestment = Number(formData.get('initialInvestment'));
    const returnRate = Number(formData.get('returnRate'));
    const duration = Number(formData.get('duration'));
    const annualContribution = Number(formData.get('annualContribution'));

    // Next step use the data from the form fields and calculate the investment data
    let newInvestmentData : InvestmentYearData[] = [];
    for(let i = 0; i < duration; i++) {
      // calculate the values
      let valueBeforeAnnualContribution = initialInvestment;
      let savedTotalValue = initialInvestment + (annualContribution * (i + 1));
      let annualReturn = valueBeforeAnnualContribution * (returnRate / 100);

      let totalInvestmentValue = savedTotalValue + annualReturn;

      // create a new object for each year
      let investmentYearResults = {
        year: i + 1,
        savedTotalValue: savedTotalValue,
        annualReturn: annualReturn,
        totalInvestmentValue: totalInvestmentValue
      };

      // add the object to the investmentData array
      investmentData.push(investmentYearResults);
    }

    console.log(investmentData)

  }

  return (
    <div>
        <h1>Ex95 Investment Calculator</h1>
        <form onSubmit={ formSubmissionHandler }>
          <div>
            Initial investment: <input type="number" name="initialInvestment"/>
          </div>
          <div>
            Annual return rate: <input type="number" name="returnRate"/>
          </div>
          <div>
            Investment duration(years): <input type="number" name="duration"/>
          </div>
          <div>
            Additional annual contribution: <input type="number" name="annualContribution"/>
          </div>
          <button>Calculate</button>
        </form>

        <div>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Saved total value </th>
                <th>Annual return </th>
                <th>Total investment value </th>                
              </tr>
            </thead>
            <tbody>
              {
                investmentData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.year}</td>
                      <td>{data.savedTotalValue}</td>
                      <td>{data.annualReturn}</td>
                      <td>{data.totalInvestmentValue}</td>
                    </tr>
                  )
                })
              }              
            </tbody>
          </table>
        </div>
    </div>
  )
}
