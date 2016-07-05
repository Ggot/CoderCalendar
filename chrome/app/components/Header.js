var React = require('react');

var Header = React.createClass({
    onClickGitHub: function(){
        chrome.tabs.create({ url: "https://bit.ly/1LUziPN" });
    },
    onClickRate: function(){
        chrome.tabs.create({ url: "https://chrome.google.com/webstore/detail/coders-calendar/bageaffklfkikjigoclfgengklfnidll/reviews" });
    },
    onClickAndroid: function(){
        chrome.tabs.create({ url: "https://bit.ly/1KqFi3U" });
    },
    onClickSettings: function(){
        chrome.tabs.create({ url: "options.html" });
    },
    render: function(){
        return(
           <header>
              <i className="fa fa-code fa-2x gh-btn" onClick={this.onClickGitHub}></i>
              <i className="fa fa-star fa-2x" onClick={this.onClickRate}></i>
              <i className="fa fa-android fa-2x"  onClick={this.onClickAndroid}></i>
              <h3>Coder Calendar</h3>
              <i className="fa fa-gear fa-2x" onClick={this.onClickSettings}></i>
            </header>
        )
    }
});

module.exports = Header;
