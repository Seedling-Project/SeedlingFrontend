import React from 'react'

const Curriculum: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold leading-tight text-gray-900">
        Curriculum Subjects
      </h1>
      <h2 className="pt-6 pb-2 text-3xl font-semibold leading-snug text-gray-700">
        Mathematics
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Pass Rate</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <td>1</td>
              <td>MATH-161: Trigonometry and MATH-162: Precalculus</td>
              <td>46% and 57%</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>MATH-171: Calculus I</td>
              <td>57%</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>MATH-172: Calculus II</td>
              <td>70%</td>
            </tr>
            <tr className="hover">
              <th>4</th>
              <td>MATH-173: Calculus III and IV</td>
              <td>54%</td>
            </tr>
            <tr className="hover">
              <th>5</th>
              <td>MATH-191: Linear Algebra</td>
              <td>67%</td>
            </tr>
            <tr className="hover">
              <th>6</th>
              <td>MATH-193: Ordinary Differential Equations</td>
              <td>67%</td>
            </tr>
            <tr className="hover">
              <th>7</th>
              <td>MATH-134: Elementary Statistics</td>
              <td>TBD</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="pt-6 pb-2 text-3xl font-semibold leading-snug text-gray-700">
        Physics
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="hover">
              <th></th>
              <th>Name</th>
              <th>Pass Rate</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>PHYS-101: Mechanics</td>
              <td>67%</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>PHYS-102: Waves, Thermodynamics, Optics</td>
              <td>79%</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>PHYS-103: Electricity, Magnetism, and Modern Physics</td>
              <td>77%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="pt-6 pb-2 text-3xl font-semibold leading-snug text-gray-700">
        Chemistry
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="hover">
              <th></th>
              <th>Name</th>
              <th>Pass Rate</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>CHEM-101: Chemistry I</td>
              <td>43%</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>CHEM-102: Chemistry II</td>
              <td>51.28%</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>CHEM-112: Organic Chemistry I</td>
              <td>TBD</td>
            </tr>
            <tr className="hover">
              <th>4</th>
              <td>CHEM-113: Organic Chemistry II</td>
              <td>93%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="pt-6 pb-2 text-3xl font-semibold leading-snug text-gray-700">
        Biology
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="hover">
              <th></th>
              <th>Name</th>
              <th>Pass Rate</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>BIO-101: Biological Principles</td>
              <td>82%</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>BOT-101: General Botany</td>
              <td>78%</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>ZOOL-101: General Zoology</td>
              <td>TBD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Curriculum
