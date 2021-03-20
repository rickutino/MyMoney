import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  return (
    <Container>
      <table>
        <tr>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
        </tr>

        <tbody>
          <tr>
            <td>WEB制作案件</td>
            <td className="deposit">¥120.000</td>
            <td>案件</td>
            <td>2021/02/19</td>
          </tr>
          <tr>
            <td>ローン</td>
            <td className="withdraw">- ¥98.000</td>
            <td>案件</td>
            <td>2021/03/05</td>
          </tr>
          <tr>
            <td>WEB制作案件</td>
            <td className="deposit">¥12.000</td>
            <td>案件</td>
            <td>2021/03/19</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
