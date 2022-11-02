import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a href="ww" class="u-image u-logo u-image-1" data-image-width="1584" data-image-height="1224">
                        <img src="./images/logo_pp.jpg" class="u-logo-image u-logo-image-1"alt=""></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="./">Inicio</a>
                            <a class="nav-link" href="./acerca">Modificar</a>
                            <a class="nav-link" href="./productos">Productos</a>
                            <a class="nav-link" href="./productos">Productos1</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}