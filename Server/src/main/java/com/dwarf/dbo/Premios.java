/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dwarf.dbo;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author luccame
 */
@Entity
@XmlRootElement
public class Premios implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome,imagem,status;
    private BigDecimal valor;
    private Usuario usuario;
    private Administrador administrador;
    
    
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "id")
    public Usuario getUsuario() {
        return usuario;
    }
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "id")
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "id")
    public Administrador getAdministrador() {
        return administrador;
    }
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "id")
    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Premios)) {
            return false;
        }
        Premios other = (Premios) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.dwarf.dbo.Premios[ id=" + id + " ]";
    }
    
}
