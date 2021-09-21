import imageone from '../image/images4.jpg'
import imagetwo from '../image/images5.jpg'
import imagethree from '../image/images6.jpg'
function Home(){
    return(
        <div>
            <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="https://cdn.shopclues.com/images/banners/BestEverything_akb_5July21_W.jpg" className="d-block w-100" alt="pic1"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.shopclues.com/images/banners/Jewellery_W_24thAug_PR.jpg" className="d-block w-100" alt="pic2"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://cdn.shopclues.com/images/banners/HT_akb_24Aug21_W.jpg" className="d-block w-100" alt="pic3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span classn="visually-hidden"></span>
                </button>
            </div>
            <div className="d-flex justify-content-around mt-5">
                <div><img src={imageone} alt="" className="mx-auto d-block" style={{height:"90%", width:"95%"}}/></div>
                <div><img src={imagetwo} alt="" className="mx-auto d-block" style={{height:"90%", width:"95%"}}/></div>
                <div><img src={imagethree} alt="" className="mx-auto d-block" style={{height:"90%", width:"95%"}}/></div>
            </div>
            <h1 className="text-center font">Deals of the day</h1>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>Mahadev</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n2.sdlcdn.com/imgs/j/o/r/large/Veirdo-100-Percent-Cotton-Green-SDL302182620-1-1ba35.jpeg" alt=""  />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>T-Shirt</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n3.sdlcdn.com/imgs/i/z/m/large/pRd-PU-Tan-Casual-Long-SDL867879071-1-a7867.jpeg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>Wallet</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n2.sdlcdn.com/imgs/j/s/o/230X258_sharpened/layasa-Lifestyle-White-Casual-Shoes-SDL043647494-1-8f1ba.jpeg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>Shoes</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n2.sdlcdn.com/imgs/j/s/2/230X258_sharpened/Imcolus-Sneakers-White-Casual-Shoes-SDL558474528-1-7fcef.JPG" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>Shoes</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n1.sdlcdn.com/imgs/i/z/e/large/Wonderchef-Plastic-Manual-Chopper-SDL629944208-1-ccc77.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>Juser</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n1.sdlcdn.com/imgs/i/z/e/large/Bentag-Vegetable-Fruit-Clever-Cutter-SDL841893040-1-ea5e3.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>Cutter</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n3.sdlcdn.com/imgs/j/t/u/230X258_sharpened/SFC-Ankle-Length-Festive-Party-SDL761289745-1-db18b.jpeg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>Gown</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n2.sdlcdn.com/imgs/j/n/p/230X258_sharpened/Vivo-Y20-3D-Back-Covers-SDL062240990-1-1d8b2.webp" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>Cover</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cols mt-5">
                    <div className="card">
                        <img src="https://n1.sdlcdn.com/imgs/j/d/w/large/HAP-Kids-Colored-Camisole-Pack-SDL232453291-1-f841f.jpeg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"100%"}}>Baby dress</h5>
                        <p className="card-text" style={{fontSize:"70%"}}> A product may be a hybrid and include both physical and virtual elements.</p>
                        <button className="btn btn-primary" style={{fontSize:"70%"}}>Add to Cart</button>
                    </div>
                    </div>
                </div>

            </div>
            <footer className="mt-2" style={{backgroundColor:"GrayText", color:"white", paddingTop:"1px"}}>
        <div className="d-flex justify-content-around mt-1">
          <div>
            <h5 className="text-center">Temporary Address</h5>
            <p style={{marginBottom:"0px"}}>Sai leo Nagar,</p>
            <p style={{marginBottom:"0px"}}>West Tambaram,</p>
            <p style={{marginBottom:"0px"}}>Chennai-600017.</p>
            <p style={{marginBottom:"0px"}}>Ph No: 2251 2222.</p>
          </div>
          <div>
            <h5 className="text-center">Permanent Address</h5>
            <p style={{marginBottom:"0px"}}>Sai leo Nagar,</p>
            <p style={{marginBottom:"0px"}}>West Tambaram,</p>
            <p style={{marginBottom:"0px"}}>Chennai-600017.</p>
            <p style={{marginBottom:"0px"}}>Ph No: 2251 2222.</p>
          </div>
        </div>
      </footer>
        </div>
        
    )
}
export default Home