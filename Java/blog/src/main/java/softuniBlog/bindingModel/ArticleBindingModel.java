/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package softuniBlog.bindingModel;

import javax.validation.constraints.NotNull;

/**
 *
 * @author tbise
 */
public class ArticleBindingModel {
    @NotNull
    private String title;
    
    @NotNull
    private String content;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
    
    
}
