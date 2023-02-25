@extends('layouts.frontend')

@section('products')
  {{-- //All Products section start here --}}
  <section class="categories">
    <div class="container">
      <div class="row">
        <div class="categories__slider owl-carousel">
          @foreach ($products as $product)
            <div class="col-lg-3">
              <div class="categories__item set-bg" data-setbg="{{ $product->image_name }}">
                <h5><a href="#">{{ $product->name }}</a></h5>
                <add-to-cart product-id={{ $product->id }}></add-to-cart>

              </div>
            </div>
          @endforeach

        </div>
      </div>
    </div>
  </section>
@endsection
