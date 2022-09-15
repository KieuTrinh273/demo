import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Product from './product';
import ProductCategory from './product-category';
import Customer from './customer';
import ProductOrder from './product-order';
import OrderItem from './order-item';
import Invoice from './invoice';
import Shipment from './shipment';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="product/*" element={<Product />} />
        <Route path="product-category/*" element={<ProductCategory />} />
        <Route path="customer/*" element={<Customer />} />
        <Route path="product-order/*" element={<ProductOrder />} />
        <Route path="order-item/*" element={<OrderItem />} />
        <Route path="invoice/*" element={<Invoice />} />
        <Route path="shipment/*" element={<Shipment />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
