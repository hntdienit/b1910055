import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";

import { AuthContext } from "../../helpers/AuthContext.js";
import styles from "./AdminSideBar.module.scss";

/* import FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faHouse,
  faList,
} from "@fortawesome/free-solid-svg-icons";

/* import assets */
import images from "../../assets/images";

/* import components */
import Image from "../Image";

const cl = className.bind(styles);

function SideBar() {
    
  return (
    <>
      <div className={cl("iconmenu")}>
        <div className={cl("nav-toggle-box")}>
          <div className={cl("nav-toggle-icon")}>
            <FontAwesomeIcon icon={faList} className={""} />
          </div>
        </div>
        <ul className={cl("nav", "nav-pills", "flex-column")}>
          <li
            className={cl("nav-item")}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Dashboards"
          >
            <button
              className={cl("nav-link")}
              data-bs-toggle="pill"
              data-bs-target="#pills-dashboards"
              type="button"
            >
              <FontAwesomeIcon icon={faHouse} className={""} />
            </button>
          </li>
          <li
            className={cl("nav-item")}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Application"
          >
            <button
              className={cl("nav-link")}
              data-bs-toggle="pill"
              data-bs-target="#pills-application"
              type="button"
            >
              <FontAwesomeIcon icon={faEllipsisVertical} className={""} />
              <i class="bi bi-grid-fill"></i>
            </button>
          </li>
        </ul>
      </div>
      <div className={cl("textmenu")}>
        <div className={cl("brand-logo")}>
        <Link to={"/admin"}>
        <Image src={images.logo} alt="Trang chu"/>
          </Link>
        </div>
        <div className={cl("tab-content")}>
          <div className={cl("tab-pane", "fade", "active", "show")} id="pills-dashboards">
            <div className={cl("list-group", "list-group-flush")}>
              <div className={cl("list-group-item")}>
                <div className={cl("d-flex w-100 justify-content-between")}>
                  <h5 class="mb-0">Dashboards</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="index.html" class="list-group-item">
                <i class="bi bi-cart-plus"></i>e-Commerce
              </a>
              <a href="index2.html" class="list-group-item">
                <i class="bi bi-wallet"></i>Sales
              </a>
              <a href="index3.html" class="list-group-item">
                <i class="bi bi-bar-chart-line"></i>Analytics
              </a>
              <a href="index4.html" class="list-group-item">
                <i class="bi bi-archive"></i>Project Management
              </a>
              <a href="index5.html" class="list-group-item">
                <i class="bi bi-cast"></i>CMS Dashboard
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-application">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Application</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="app-emailbox.html" class="list-group-item">
                <i class="bi bi-envelope"></i>Email
              </a>
              <a href="app-chat-box.html" class="list-group-item">
                <i class="bi bi-chat-left-text"></i>Chat Box
              </a>
              <a href="app-file-manager.html" class="list-group-item">
                <i class="bi bi-archive"></i>File Manager
              </a>
              <a href="app-to-do.html" class="list-group-item">
                <i class="bi bi-check2-square"></i>Todo List
              </a>
              <a href="app-invoice.html" class="list-group-item">
                <i class="bi bi-receipt"></i>Invoice
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-widgets">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Widgets</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="widgets-static-widgets.html" class="list-group-item">
                <i class="bi bi-box"></i>Static Widgets
              </a>
              <a href="widgets-data-widgets.html" class="list-group-item">
                <i class="bi bi-bar-chart"></i>Data Widgets
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-ecommerce">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">eCommerce</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="ecommerce-products-list.html" class="list-group-item">
                <i class="bi bi-box-seam"></i>Products List
              </a>
              <a href="ecommerce-products-grid.html" class="list-group-item">
                <i class="bi bi-box-seam"></i>Products Grid
              </a>
              <a
                href="ecommerce-products-categories.html"
                class="list-group-item"
              >
                <i class="bi bi-card-text"></i>Products Categories
              </a>
              <a href="ecommerce-orders.html" class="list-group-item">
                <i class="bi bi-plus-square"></i>Orders
              </a>
              <a href="ecommerce-orders-detail.html" class="list-group-item">
                <i class="bi bi-handbag"></i>Orders Detail
              </a>
              <a href="ecommerce-add-new-product.html" class="list-group-item">
                <i class="bi bi-handbag"></i>Add New Product
              </a>
              <a
                href="ecommerce-add-new-product-2.html"
                class="list-group-item"
              >
                <i class="bi bi-handbag"></i>Add New Product 2
              </a>
              <a href="ecommerce-transactions.html" class="list-group-item">
                <i class="bi bi-handbag"></i>Transactions
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-components">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Components</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="component-alerts.html" class="list-group-item">
                <i class="bi bi-bell"></i>Alerts
              </a>
              <a href="component-accordions.html" class="list-group-item">
                <i class="bi bi-arrows-collapse"></i>Accordions
              </a>
              <a href="component-badges.html" class="list-group-item">
                <i class="bi bi-badge-8k"></i>Badges
              </a>
              <a href="component-buttons.html" class="list-group-item">
                <i class="bi bi-menu-button"></i>Buttons
              </a>
              <a href="component-cards.html" class="list-group-item">
                <i class="bi bi-card-list"></i>Cards
              </a>
              <a href="component-carousels.html" class="list-group-item">
                <i class="bi bi-card-image"></i>Carousels
              </a>
              <a href="component-list-groups.html" class="list-group-item">
                <i class="bi bi-list-ol"></i>List Groups
              </a>
              <a href="component-media-object.html" class="list-group-item">
                <i class="bi bi-collection"></i>Media Objects
              </a>
              <a href="component-modals.html" class="list-group-item">
                <i class="bi bi-binoculars"></i>Modals
              </a>
              <a href="component-navs-tabs.html" class="list-group-item">
                <i class="bi bi-segmented-nav"></i>Navs & Tabs
              </a>
              <a href="component-navbar.html" class="list-group-item">
                <i class="bi bi-list"></i>Navbars
              </a>
              <a href="component-paginations.html" class="list-group-item">
                <i class="bi bi-arrow-down-up"></i>Pagination
              </a>
              <a
                href="component-popovers-tooltips.html"
                class="list-group-item"
              >
                <i class="bi bi-droplet"></i>Popovers & Tooltips
              </a>
              <a href="component-progress-bars.html" class="list-group-item">
                <i class="bi bi-eject"></i>Progress
              </a>
              <a href="component-spinners.html" class="list-group-item">
                <i class="bi bi-gear-wide"></i>Spinners
              </a>
              <a href="component-notifications.html" class="list-group-item">
                <i class="bi bi-app-indicator"></i>Notifications
              </a>
              <a href="component-avtars-chips.html" class="list-group-item">
                <i class="bi bi-person-badge"></i>Avatrs & Chips
              </a>
              <a href="component-typography.html" class="list-group-item">
                <i class="bi bi-person-badge"></i>Typography
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-forms">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Forms</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="form-elements.html" class="list-group-item">
                <i class="bi bi-award"></i>Form Elements
              </a>
              <a href="form-input-group.html" class="list-group-item">
                <i class="bi bi-back"></i>Input Groups
              </a>
              <a href="form-layouts.html" class="list-group-item">
                <i class="bi bi-bookmark-check"></i>Form Layouts
              </a>
              <a href="form-validations.html" class="list-group-item">
                <i class="bi bi-broadcast-pin"></i>Form Validations
              </a>
              <a href="form-file-upload.html" class="list-group-item">
                <i class="bi bi-cloud-upload"></i>File Upload
              </a>
              <a href="form-date-time-pickes.html" class="list-group-item">
                <i class="bi bi-calendar-date"></i>Date Pickers
              </a>
              <a href="form-select2.html" class="list-group-item">
                <i class="bi bi-check2-circle"></i>Select2
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-tables">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Tables</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="table-basic-table.html" class="list-group-item">
                <i class="bi bi-table"></i>Basic Tables
              </a>
              <a href="table-advance-tables.html" class="list-group-item">
                <i class="bi bi-basket3"></i>Advance Tables
              </a>
              <a href="table-datatable.html" class="list-group-item">
                <i class="bi bi-graph-up"></i>Data Tables
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-authentication">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Authentication</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="authentication-signin.html" class="list-group-item">
                <i class="bi bi-easel"></i>Sign In
              </a>
              <a
                href="authentication-signin-with-header-footer.html"
                class="list-group-item d-flex align-items-center"
              >
                <i class="bi bi-eject"></i>Sign In with Header & Footer
              </a>
              <a href="authentication-signup.html" class="list-group-item">
                <i class="bi bi-emoji-heart-eyes"></i>Sign Up
              </a>
              <a
                href="authentication-signup-with-header-footer.html"
                class="list-group-item d-flex align-items-center"
              >
                <i class="bi bi-eye"></i>Sign Up with Header & Footer
              </a>
              <a
                href="authentication-forgot-password.html"
                class="list-group-item"
              >
                <i class="bi bi-file-earmark-code"></i>Forgot Password
              </a>
              <a
                href="authentication-reset-password.html"
                class="list-group-item"
              >
                <i class="bi bi-gem"></i>Reset Password
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-icons">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Icons</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="icons-line-icons.html" class="list-group-item">
                <i class="bi bi-brightness-low"></i>Line Icons
              </a>
              <a href="icons-boxicons.html" class="list-group-item">
                <i class="bi bi-chat"></i>Boxicons
              </a>
              <a href="icons-feather-icons.html" class="list-group-item">
                <i class="bi bi-droplet"></i>Feather Icons
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-charts">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Charts</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="charts-chartjs.html" class="list-group-item">
                <i class="bi bi-bar-chart"></i>Chart JS
              </a>
              <a href="charts-apex-chart.html" class="list-group-item">
                <i class="bi bi-pie-chart"></i>Apex Chart
              </a>
              <a href="charts-highcharts.html" class="list-group-item">
                <i class="bi bi-graph-up"></i>Highcharts
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-maps">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Maps</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="map-google-maps.html" class="list-group-item">
                <i class="bi bi-geo-alt"></i>Google Map
              </a>
              <a href="map-vector-maps.html" class="list-group-item">
                <i class="bi bi-geo"></i>Vector Map
              </a>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-pages">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Pages</h5>
                </div>
                <small class="mb-0">Some placeholder content</small>
              </div>
              <a href="pages-user-profile.html" class="list-group-item">
                <i class="bi bi-alarm"></i>User Profile
              </a>
              <a href="pages-timeline.html" class="list-group-item">
                <i class="bi bi-archive"></i>Timeline
              </a>
              <a href="pages-faq.html" class="list-group-item">
                <i class="bi bi-question-diamond"></i>FAQ
              </a>
              <a href="pages-pricing-tables.html" class="list-group-item">
                <i class="bi bi-tags"></i>Pricing
              </a>
              <a href="pages-errors-404-error.html" class="list-group-item">
                <i class="bi bi-bug"></i>404 Error
              </a>
              <a href="pages-errors-500-error.html" class="list-group-item">
                <i class="bi bi-diagram-2"></i>500 Error
              </a>
              <a href="pages-errors-coming-soon.html" class="list-group-item">
                <i class="bi bi-egg-fried"></i>Coming Soon
              </a>
              <a href="pages-blank-page.html" class="list-group-item">
                <i class="bi bi-flag"></i>Blank Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
