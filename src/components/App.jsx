import React, { Component } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { getImages } from 'services/getImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    response: [],
    page: 1,
    inputValue: '',
    loading: false,
  };

  onLoadResults = async () => {
    this.setState({ loading: true });
    const promise = await getImages(this.state.inputValue, this.state.page);
    getImages(this.state.inputValue, this.state.page).finally(() =>
      this.setState({ loading: false })
    );
    this.setState(prevState => {
      return {
        response: [...prevState.response, ...promise.hits],
        page: prevState.page + 1,
      };
    });
  };

  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <Searchbar
          onSubmit={e => {
            e.preventDefault();
            this.setState({ response: [], page: 1 });
            setTimeout(() => this.onLoadResults(), 100);
          }}
          onChange={this.onChange}
        />
        <ImageGallery>
          {this.state.response.map(item => (
            <ImageGalleryItem
              key={item.id}
              id={item.id}
              src={item.webformatURL}
              largeIMG={item.largeImageURL}
            />
          ))}
        </ImageGallery>

        {this.state.loading && (
          <div className="audio">
            <div className="audio-margin">
              <CirclesWithBar height="40" width="40" color="blue" />
            </div>
          </div>
        )}

        {this.state.response.length > 0 && !this.state.loading && (
          <Button onClick={this.onLoadResults} />
        )}
      </div>
    );
  }
}
