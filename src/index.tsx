import { render } from 'react-dom';

import Pretty from '@components/Pretty';

import './index.css';

const data = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: `path.resolve(__dirname, 'dist')`,
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': `path.resolve(__dirname, 'src/components/')`,
    }
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [
    `new HtmlWebpackPlugin({
      template: 'index.html',
    })`
  ]
}

function App(){
  return (
    <Pretty data={data} />
  )
}

render(<App />, document.getElementById('root'));
