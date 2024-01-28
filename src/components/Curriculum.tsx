import React from "react";

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
            <tr>
              <th>1</th>
              <td>MATH-161: Trigonometry and MATH-162: Precalculus</td>
              <td>TBD</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>MATH-171: Calculus I</td>
              <td>TBD</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>MATH-172: Calculus II</td>
              <td>TBD</td>
            </tr>
            <tr>
              <th>4</th>
              <td>MATH-173: Calculus III and IV</td>
              <td>TBD</td>
            </tr>
            <tr>
              <th>5</th>
              <td>MATH-191: Linear Algebra</td>
              <td>TBD</td>
            </tr>
            <tr>
              <th>6</th>
              <td>MATH-193: Ordinary Differential Equations</td>
              <td>TBD</td>
            </tr>
            <tr>
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
            <tr>
              <th></th>
              <th>Name</th>
              <th>Pass Rate</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>PHYS-101: Mechanics</td>
              <td>TBD</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>PHYS-102: Waves, Thermodynamics, Optics</td>
              <td>TBD</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>PHYS-103: Electricity, Magnetism, and Modern Physics</td>
              <td>TBD</td>
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
            <tr>
              <th></th>
              <th>Name</th>
              <th>Pass Rate</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>CHEM-101: Chemistry I</td>
              <td>less than 50%</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>CHEM-102: Chemistry II</td>
              <td>TBD</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>CHEM-112: Organic Chemistry I</td>
              <td>TBD</td>
            </tr>
            <tr>
              <th>4</th>
              <td>CHEM-113: Organic Chemistry II</td>
              <td>TBD</td>
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
            <tr>
              <th></th>
              <th>Name</th>
              <th>Pass Rate</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>BIO-101: Biological Principles</td>
              <td>TBD</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>BOT-101: General Botany</td>
              <td>TBD</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>ZOOL-101: General Zoology</td>
              <td>TBD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Curriculum;
