import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => this.setState({ imageName });
  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery image={this.state.imageName} />
        <ToastContainer autoClose={2500} />
        <GlobalStyle />
      </Layout>
    );
  }
}