(window["webpackJsonpweb-store-front-customer"]=window["webpackJsonpweb-store-front-customer"]||[]).push([[5],{297:function(e,t,a){"use strict";var r=a(1),s=a(2),c=a(3),n=a.n(c),l=a(0),i=a.n(l),o=a(4),u=a(67),d=i.a.forwardRef(function(e,t){var a=e.bsPrefix,c=e.variant,l=e.size,d=e.active,p=e.className,f=e.block,m=e.type,h=e.as,v=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),E=Object(o.a)(a,"btn"),b=n()(p,E,d&&"active",E+"-"+c,f&&E+"-block",l&&E+"-"+l);if(v.href)return i.a.createElement(u.a,Object(r.a)({},v,{as:h,ref:t,className:n()(b,v.disabled&&"disabled")}));t&&(v.ref=t),h||(v.type=m);var y=h||"button";return i.a.createElement(y,Object(r.a)({},v,{className:b}))});d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=d},301:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var r=a(12),s=a(13),c=a(16),n=a(14),l=a(15),i=a(0),o=a.n(i),u=(a(301),a(291)),d=a(292),p=a(289),f=a(295),m=a(297),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(n.a)(t).call(this))).addNewFilter=function(){console.log("filter added")},a.state={categories:[]},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://young-bayou-22235.herokuapp.com/getcategories").then(function(e){return e.json()}).then(function(t){e.setState({categories:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p.a,{md:"4"},o.a.createElement(f.a,{style:{width:"12rem"}},o.a.createElement(f.a.Body,{style:{boxShadow:"2.5px 1px 2px 1px rgba(0, 0, 0, 0.15)"}},this.state.categories.map(function(t){return o.a.createElement("div",null,o.a.createElement(f.a.Title,null,t.name),t.items.map(function(a){return o.a.createElement("div",{className:"purple-button"},o.a.createElement(m.a,{variant:"primary",onClick:function(r){e.props.handleFilterProducts(r,a,t.name)}},a))}))})))))}}]),t}(i.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(n.a)(t).call(this,e))).handleFilterProducts=function(e,t,r){console.log(t,r),e.target.classList.toggle("active");var s=a.state.activeFilters;s.includes(t)?a.setState({activeFilters:s.filter(function(e){return e!==t})},function(){a.filterProducts(t,r)}):(s.push(t),a.setState({activeFilters:s},function(){a.filterProducts(t,r)}))},a.handletheFilterProducts=function(e,t,r){if(a.state.activeFilters.length<=0)a.setState({filteredProducts:a.state.products});else{var s=a.state.filteredProducts.filter(function(e){return a.state.activeFilters.includes(e[r])});console.log(s,"!!!"),a.setState({filteredProducts:s})}},a.filtertheProducts=function(){console.log("products filtered")},a.state={colorFilters:[],tasteFilters:[],shapeFilters:[],manufacturerFilters:[],products:[],filteredProducts:[],activeFilters:[]},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.selectedCategory.length>0&&console.log(this.props,"NOT SELECTED THOURGHT CATEGORIES"),this.props.products.forEach(function(e){e.selected=!1}),this.setState({products:this.props.products,filteredProducts:this.props.products})}},{key:"filterProducts",value:function(e,t){var a=this;if(console.log(this.state.filteredProducts,this.state.activeFilters,"HCEK"),this.state.activeFilters.length<=0)this.setState({filteredProducts:this.state.products});else{var r=this.state.products.filter(function(e){if(a.state.activeFilters.includes(e[t]))return e});this.setState({filteredProducts:r})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,console.log(this.state.filteredProducts,this.props.products),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement(h,{handleFilterProducts:this.handleFilterProducts}),o.a.createElement(p.a,{md:"8"},o.a.createElement("div",{className:"products-holder"},o.a.createElement("div",{className:"products-holder-holder"},this.state.filteredProducts.map(function(t){return o.a.createElement(f.a,{style:{width:"12rem"},key:t.ID},o.a.createElement("div",{className:"outer"},t.selected?o.a.createElement("div",{style:{display:"initial"},className:"circle"},o.a.createElement("p",null,"Added")):o.a.createElement("div",{style:{display:"none"},className:"circle"},o.a.createElement("p",null,"Added")),o.a.createElement("div",{style:{right:"0px"},className:"overlay",onClick:function(t){e.props.toggleModal("info","test")}},o.a.createElement("i",{style:{paddingTop:"50px",color:"white"},className:"fas fa-info-circle fa-4x"},o.a.createElement("p",{style:{fontSize:"15px"}},"Info"))),o.a.createElement("div",{className:"overlay",onClick:function(a){e.props.addToCart(t,a)}},o.a.createElement("i",{style:{paddingTop:"50px",color:"white"},className:"fas fa-cart-plus fa-4x"},o.a.createElement("p",{style:{fontSize:"15px"}},"add to cart"))),o.a.createElement(f.a.Img,{variant:"top",src:"https://young-bayou-22235.herokuapp.com/image/".concat(t.productid)})),o.a.createElement(f.a.Title,null,t.name),o.a.createElement(f.a.Text,null,t.price))})))))))}}]),t}(i.Component);t.default=v}}]);
//# sourceMappingURL=5.aacd9971.chunk.js.map